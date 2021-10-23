const downloadBtn = document.querySelector(".download-btn");
const countdown = document.querySelector(".countdown");
const pleaseWaitText = document.querySelector(".pleaseWait-text");
const manualDownloadText = document.querySelector(".manualDownload-text");
const manualDownloadLink = document.querySelector(".manualDownload-link");
var timeleft = 10;

downloadBtn.addEventListener("click", () => {
    downloadBtn.style.display = "none";
    countdown.innerHTML = "Download will begin automatically in <span>" + timeleft + "</span> seconds."; // For Quick Start Of Countdown

    var downloadTimer = setInterval(function timeCount(){
        timeleft -= 1;
        countdown.innerHTML = "Download will begin automatically in <span>" + timeleft + "</span> seconds.";

        if(timeleft <= 0){
            clearInterval(downloadTimer);
            pleaseWaitText.style.display = "block";
            let download_href = ""; // Enter The Downloadable File
            window.location.href = download_href;
            manualDownloadLink.href = download_href;

            setTimeout(() => {
                pleaseWaitText.style.display = "none";
                manualDownloadLink.style.display = "block";
            }, 4000);
        }
    }, 1000);
});