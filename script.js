if (detectMob()) {
				document.getElementById("instagram_link").href="instagram://user?username=maoleng.bhl";
				document.getElementById("facebook_link").href="fb://profile/100012359089044";
			}
			function detectMob() {
				const toMatch = [
				/Android/i,
				/webOS/i,
				/iPhone/i,
				/iPad/i,
				/iPod/i,
				/BlackBerry/i,
				/Windows Phone/i
				];
				return toMatch.some((toMatchItem) => {
					return navigator.userAgent.match(toMatchItem);
				});
			}