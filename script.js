document.onkeypress = function (e) {
    e = e || window.event;

	if (e.key == "1") {
		document.body.style = "filter: brightness(1.1);"

		for (var i=0; i<document.querySelectorAll(".BaseActivity-messages-item").length; i++) {
			document.querySelectorAll(".BaseActivity-messages-item")[i].style = "margin-bottom: 30px; background-color: transparent;"
		}

		document.querySelector(".BaseGeneric-col1-organizations-districtwrapper").style = "background-color: rgb(20,20, 20);"
		document.querySelector(".BaseStudentClasses").style = "background-color: rgba(20,20, 20, 0.7);"
		document.querySelector(".CalendarPanel_Student").style = "background-color: rgba(20,20, 20, 0.7); position: fixed;"
		document.querySelector(".BaseStudent-col1-portfolioPanel").style = "background-color: rgba(20,20, 20, 0.7);"
		document.querySelector(".groupRecommender").style = "background-color: rgba(20,20, 20, 0.7);"
		document.querySelector(".BaseStudent-col1-apps").style = "background-color: rgba(20,20, 20, 0.7);"
		
		document.querySelector(".BaseStudent-col1-places").style = "background-color: rgba(20,20, 20, 0.7);"


		document.querySelector(".BaseGeneric-col2-activity").style = "background-color: rgba(0,0,0, 0.7);"
		document.querySelector(".xl-row-g-b-m").style = "background: url('https://cdn1.edsby.com/on2/9bac68a1cb0c3d1c2e88401cc1d57438069f-M');"
		document.querySelector(".Header-banner").style = "background-color: rgb(0, 0, 0);"

		for (var i=0; i<document.querySelectorAll(".xds-button").length; i++) {
			document.querySelectorAll(".xds-button")[i].style = "background-color: rgb(21, 192, 200); color: black;"
		}

		for (var i=0; i<document.querySelectorAll(".xds-CalendarPanel-event").length; i++) {
			document.querySelectorAll(".xds-CalendarPanel-event")[i].style = "background-color: rgba(102, 102, 197, 0.7);"
		}

		for (var i=0; i<document.querySelectorAll(".FeedItemComponent-itembody-content-header-details-title-name-place").length; i++) {
			document.querySelectorAll(".FeedItemComponent-itembody-content-header-details-title-name-place")[i].style = "color: rgb(21, 192, 200);"
		}
	} else if (e.key == "0") {
		document.body.style = null

		for (var i=0; i<document.querySelectorAll(".BaseActivity-messages-item").length; i++) {
			document.querySelectorAll(".BaseActivity-messages-item")[i].style = null
		}

		document.querySelector(".BaseGeneric-col1-organizations-districtwrapper").style = null
		document.querySelector(".BaseStudentClasses").style = null
		document.querySelector(".CalendarPanel_Student").style = null
		document.querySelector(".BaseStudent-col1-portfolioPanel").style = null
		document.querySelector(".groupRecommender").style = null
		document.querySelector(".BaseStudent-col1-apps").style = null
		
		document.querySelector(".BaseStudent-col1-places").style = null


		document.querySelector(".BaseGeneric-col2-activity").style = null
		document.querySelector(".xl-row-g-b-m").style = null
		document.querySelector(".Header-banner").style = null

		for (var i=0; i<document.querySelectorAll(".xds-button").length; i++) {
			document.querySelectorAll(".xds-button")[i].style = null
		}

		for (var i=0; i<document.querySelectorAll(".xds-CalendarPanel-event").length; i++) {
			document.querySelectorAll(".xds-CalendarPanel-event")[i].style = null
		}

		for (var i=0; i<document.querySelectorAll(".FeedItemComponent-itembody-content-header-details-title-name-place").length; i++) {
			document.querySelectorAll(".FeedItemComponent-itembody-content-header-details-title-name-place")[i].style = null
		}
	}
}
