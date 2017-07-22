import React from "react"
import { connect } from "react-redux"

import { fetchAccount, changeSetting, deleteAccount } from "../actions/accountActions"

import Error from "./Error"
import TopNav from "./TopNav"
import SubNav from "./SubNav"
import PageNotFound from "./PageNotFound"
import PageNotAuthorized from "./PageNotAuthorized"

require( "../less/Account.less" )

@connect( ( store ) => {
	console.log( "store", store )
	return {
		account: store.account.account,
		error: store.account.error,
	}
})

export default class Account extends React.Component {

	componentWillMount() {
		this.props.dispatch( fetchAccount( this.props.dispatch ) )

		this.changeSettingHandler = this.changeSettingHandler.bind( this )
		this.deleteAccountHandler = this.deleteAccountHandler.bind( this )
	}

	changeSettingHandler( event ) {
		let option = event.target.dataset.option;
		let category
		let value
		if ( option.match( /^tweet/ ) )
			category = "tweet";
		else if ( option.match( /^dm/ ) )
			category = "dm";
		else
			throw new Error( "invalid setting category" )

		option = option.replace( /^(tweet|dm)_/, "" );
		console.log( "this.props.account.settings = ", this.props.account.settings )
		console.log( "this.props.account.settings[ "+category+" ][ "+option+" ] = ", this.props.account.settings[ category ][ option ] )
		value = ! this.props.account.settings[ category ][ option ]

		console.log( "option", option )
		console.log( "category", category )
		console.log( "value", value )
		this.props.dispatch( changeSetting( this.props.dispatch, category, option, value ) )
	}

	deleteAccountHandler() {
		this.props.dispatch( deleteAccount( this.props.dispatch ) )
	}

	render() {

		const { account, error } = this.props;

		if ( error ) {
			console.log( "error", error )
			if ( error.status === 404 ) {
				console.log( "404" )
				return (
					<PageNotFound error="Page was not found yo!" />
				)
			}
			else if ( error.status === 403 ) {
				console.log( "403" )
				return (
					<PageNotAuthorized returnUrl={ this.props.location.pathname } />
				)
			}
		}

		console.log( "account.settings", account.settings )

		return	(
			<div>
				<Error error={ [ error ] } />
				<TopNav title="Account" showBackButton={ false } />
				<SubNav url={ this.props.match.url } type="account" />
				<div class="container" id="main_content">
					<div class="section">
						<div class="title">Tweet my:</div>
						<div class="options">
							<div class="option" data-option="tweet_unique_numbers" data-value={ account.settings.tweet.unique_numbers } onClick={ ( event ) => { this.changeSettingHandler( event ) } }>New In-Store Receipts</div>
							<div class="option" data-option="tweet_milestones" data-value={ account.settings.tweet.milestones } onClick={ ( event ) => { this.changeSettingHandler( event ) } }>Milestones</div>
						</div>
					</div>
					<div class="section">
						<div class="title">DM my:</div>
						<div class="options">
							<div class="option" data-option="dm_unique_numbers" data-value={ account.settings.dm.unique_numbers } onClick={ ( event ) => { this.changeSettingHandler( event ) } }>New In-Store Receipts</div>
							<div class="option" data-option="dm_milestones" data-value={ account.settings.dm.milestones } onClick={ ( event ) => { this.changeSettingHandler( event ) } }>Milestones</div>
							<div class="option" data-option="dm_stores" data-value={ account.settings.dm.stores } onClick={ ( event ) => { this.changeSettingHandler( event ) } }>New Stores</div>
							<div class="option" data-option="dm_drive_thrus" data-value={ account.settings.dm.drive_thrus } onClick={ ( event ) => { this.changeSettingHandler( event ) } }>New Drive-Thru Receipts</div>
						</div>
					</div>
					<div class="delete_account" >
						<span onClick={ ( event ) => { this.deleteAccountHandler() } }>Delete My Account</span>
					</div>
				</div>
			</div>
		)
	}
}