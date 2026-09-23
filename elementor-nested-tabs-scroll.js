document.addEventListener("DOMContentLoaded", function () {

  document.addEventListener("click", function (e) {

    const link = e.target.closest("a");
    if (!link) return;

    const href = link.getAttribute("href");
    if (!href || !href.startsWith("#")) return;

    const tabID = href.substring(1);
    const tab = document.getElementById(tabID);

    // Only target Elementor tab titles
    if (tab && tab.classList.contains("e-n-tab-title")) {

      e.preventDefault();

      // Open the tab
      tab.click();

      // Wait for Elementor animation/render
      setTimeout(function () {

        // Scroll to the tabs widget top
        const tabsWidget = document.getElementById("services-tabs");

        if (tabsWidget) {

          const offset = 200; // adjust if you have sticky header

          const y =
            tabsWidget.getBoundingClientRect().top +
            window.pageYOffset -
            offset;

          window.scrollTo({
            top: y,
            behavior: "smooth"
          });
        }

      }, 350); // important: longer delay

    }

  });

});
