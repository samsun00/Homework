function initTabs(tabsContainer) {
  const tabs = tabsContainer.querySelectorAll(".tab");
  const contents = tabsContainer.querySelectorAll(".tab__content");

  function switchTab(clickedTab, index) {
    tabs.forEach((tab) => {
      tab.classList.remove("tab_active");
    });

    clickedTab.classList.add("tab_active");

    contents.forEach((content) => {
      content.classList.remove("tab__content_active");
    });

    if (contents[index]) {
      contents[index].classList.add("tab__content_active");
    }
  }

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      switchTab(tab, index);
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const allTabsContainers = document.querySelectorAll(".tabs");
  allTabsContainers.forEach((container) => {
    initTabs(container);
  });
});
