import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faYoutube,
	faFacebook,
	faTwitter,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
	return (
		<div className="social-container">
			<a
				href="https://www.youtube.com/channel/UCmFYoq_yTVsXeymyGVvy8vg"
				className="youtube social"
			>
				<FontAwesomeIcon icon={faYoutube} size="2x" />
			</a>
			<a
				href="https://www.facebook.com/niranjan.k.s.7568/"
				className="facebook social"
			>
				<FontAwesomeIcon icon={faFacebook} size="2x" />
			</a>
			<a
				href="https://twitter.com/Niranja79234790?t=KIIxoUv-lpPeDoKYWYwtEQ&s=09"
				className="twitter social"
			>
				<FontAwesomeIcon icon={faTwitter} size="2x" />
			</a>
			<a
				href="https://www.instagram.com/_niranjan_nk_/"
				className="instagram social"
			>
				<FontAwesomeIcon icon={faInstagram} size="2x" />
			</a>
		</div>
	);
}
