document.addEventListener("DOMContentLoaded", function () {
  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach(function (dropdown) {
    const dropdownValue = dropdown.querySelector(".dropdown__value");
    const dropdownList = dropdown.querySelector(".dropdown__list");
    const dropdownItems = dropdown.querySelectorAll(".dropdown__item");

    if (!dropdownValue || !dropdownList) return;

    // Открытие/закрытие текущего списка
    dropdownValue.addEventListener("click", function (event) {
      event.stopPropagation();

      // Проверяем, открыт ли текущий список
      const isOpen = dropdownList.classList.contains("dropdown__list_active");

      // Закрываем все списки
      document.querySelectorAll(".dropdown__list").forEach(function (list) {
        list.classList.remove("dropdown__list_active");
      });

      // Если текущий список был закрыт — открываем его
      if (!isOpen) {
        dropdownList.classList.add("dropdown__list_active");
      }
    });

    // Выбор пункта
    dropdownItems.forEach(function (item) {
      const link = item.querySelector(".dropdown__link");
      if (!link) return;

      link.addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation();

        dropdownValue.textContent = link.textContent;
        dropdownList.classList.remove("dropdown__list_active");
      });
    });
  });

  // Закрытие всех списков при клике вне их
  document.addEventListener("click", function () {
    document.querySelectorAll(".dropdown__list").forEach(function (list) {
      list.classList.remove("dropdown__list_active");
    });
  });
});
