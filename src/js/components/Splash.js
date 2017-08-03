import React from "react"

import TopNav from "./TopNav"

require( "../less/Splash.less" )

export default class Splash extends React.Component {

	render() {
		return (
			<div>
				<TopNav showBackButton={ false } />
				<div class="container" id="splash_content">
					
					<div class="intro">
						<img class="img_welcome" src="img/splash-welcome.png" />
						<img class="img_to_the" src="img/splash-to-the.png" />
						<img class="img_logo" src="img/splash-logo.png" />
					</div>

					<div class="section">

						<div class="title">INSTRUCTIONS</div>

						<div class="items">

							<div class="item">
								<div class="header">1. Buy In-N-Out</div>
							</div>

							<div class="item">
								<div class="header">2. Tweet Receipt Number</div>

								<div class="point">
									Examples:
									<div class="sub marked_correct">"Number Fifty-Five! #innoutChallenge"</div>
									<div class="sub marked_correct">"Number 66! #innoutChallenge"</div>
									<div class="sub marked_correct">"77! #innoutChallenge"</div>
								</div>

								<div class="point">
									Receipt numbers cannot be in hashtags.
									<div class="sub marked_wrong">"#11 #innoutChallenge"</div>
								</div>

								<div class="point">
									Tweets may be excluded by putting "#!" in your tweet.
									<div class="sub">"Still waiting for a presidential candidate to join the #innoutChallenge 4 8 15 16 23 42 #!"</div>
								</div>

								<div class="point">
									Add your store number in the format #storeNUMBER
									<div class="sub">"Number One! #innoutChallenge #store123"</div>
								</div>

								<div class="point">
									You may alternatively geotag Exact Coordinates or the In-N-Out Burger Point of Interest only (no cities, etc)
								</div>
								
							</div>

							<div class="item">
								<div class="header">3. Repeat</div>

								<div class="point">
									Track your in-store and drive-thru receipts, and store progress at { process.env.REACT_APP_FRONTEND_URL }/@TWITTER_HANDLE 
								</div>
							</div>

						</div>

					</div>

					<div class="section">

						<div class="title">FAQ</div>

						<div class="items">

							<div class="item">
								<div class="header">Do I get anything for finishing?</div>
								<div class="point">High blood pressure, most likely.</div>
							</div>

							<div class="item">
								<div class="header">Can I share receipts?</div>
								<div class="point">Nope, only the buyer gets the receipt number.</div>
							</div>

							<div class="item">
								<div class="header">Is this owned by In-N-Out?</div>
								<div class="point">Not at all! We’re just some fans doing what needs to be done.<br />That said, if they wanted to pay us we wouldn’t decline.</div>
							</div>

						</div>

					</div>

				</div>
			</div>
		)
	}
}