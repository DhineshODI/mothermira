document.addEventListener("DOMContentLoaded", function () {
  /* =========================================
     MOBILE MENU TOGGLE
  ========================================= */

  const mobileToggle = document.querySelector(".mobile-toggle");
  const navMenu = document.querySelector(".nav-menu");

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener("click", function () {
      mobileToggle.classList.toggle("active");
      navMenu.classList.toggle("open");
    });
  }

  /* =========================================
     MEGA MENU - DESKTOP
  ========================================= */

  const dropdownItems = document.querySelectorAll(".nav-item.has-dropdown");

  dropdownItems.forEach(function (item) {
    const megaMenu = item.querySelector(".mega-menu");

    if (!megaMenu) return;

    item.addEventListener("mouseenter", function () {
      item.classList.add("active");
    });

    item.addEventListener("mouseleave", function () {
      item.classList.remove("active");
    });
  });

  /* =========================================
     MEGA MENU TRIGGER ITEMS
  ========================================= */

  const triggerItems = document.querySelectorAll(".trigger-item");

  triggerItems.forEach(function (trigger) {
    trigger.addEventListener("mouseenter", function () {
      const targetId = trigger.getAttribute("data-target");

      if (!targetId) return;

      const parentMenu = trigger.closest(".mega-menu");

      if (!parentMenu) return;

      // Remove active from all trigger items
      parentMenu.querySelectorAll(".trigger-item").forEach(function (item) {
        item.classList.remove("active");
      });

      // Remove active from all content panels
      parentMenu.querySelectorAll(".content-panel").forEach(function (panel) {
        panel.classList.remove("active");
      });

      // Activate current trigger
      trigger.classList.add("active");

      // Activate matching content
      const targetPanel = parentMenu.querySelector("#" + targetId);

      if (targetPanel) {
        targetPanel.classList.add("active");
      }
    });
  });

  /* =========================================
     MOBILE MEGA MENU
  ========================================= */

  const mobileDropdownLinks = document.querySelectorAll(
    ".nav-item.has-dropdown > .nav-link",
  );

  mobileDropdownLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      // Only handle this on mobile
      if (window.innerWidth <= 991) {
        event.preventDefault();

        const parentItem = link.closest(".nav-item.has-dropdown");

        if (!parentItem) return;

        // Close other dropdowns
        dropdownItems.forEach(function (item) {
          if (item !== parentItem) {
            item.classList.remove("active");
          }
        });

        parentItem.classList.toggle("active");
      }
    });
  });

  /* =========================================
     MOBILE TRIGGER ITEMS
  ========================================= */

  triggerItems.forEach(function (trigger) {
    trigger.addEventListener("click", function () {
      if (window.innerWidth > 991) return;

      const targetId = trigger.getAttribute("data-target");

      if (!targetId) return;

      const parentMenu = trigger.closest(".mega-menu");

      if (!parentMenu) return;

      parentMenu.querySelectorAll(".trigger-item").forEach(function (item) {
        item.classList.remove("active");
      });

      parentMenu.querySelectorAll(".content-panel").forEach(function (panel) {
        panel.classList.remove("active");
      });

      trigger.classList.add("active");

      const targetPanel = parentMenu.querySelector("#" + targetId);

      if (targetPanel) {
        targetPanel.classList.add("active");
      }
    });
  });

  /* =========================================
     CLOSE MOBILE MENU WHEN LINK IS CLICKED
  ========================================= */

  const navLinks = document.querySelectorAll(".nav-menu a:not(.nav-link)");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      if (window.innerWidth <= 991) {
        if (navMenu) {
          navMenu.classList.remove("active");
        }

        if (mobileToggle) {
          mobileToggle.classList.remove("active");
        }
      }
    });
  });

  /* =========================================
     CLOSE MENU WHEN CLICKING OUTSIDE
  ========================================= */

  document.addEventListener("click", function (event) {
    if (window.innerWidth > 991) return;

    const target = event.target;

    if (
      navMenu &&
      mobileToggle &&
      !navMenu.contains(target) &&
      !mobileToggle.contains(target)
    ) {
      navMenu.classList.remove("active");
      mobileToggle.classList.remove("active");

      dropdownItems.forEach(function (item) {
        item.classList.remove("active");
      });
    }
  });

  /* =========================================
     DEFAULT ACTIVE PANELS
  ========================================= */

  const megaMenus = document.querySelectorAll(".mega-menu");

  megaMenus.forEach(function (menu) {
    const activeTrigger = menu.querySelector(".trigger-item.active");

    const activePanel = menu.querySelector(".content-panel.active");

    // If trigger is active but panel isn't
    if (activeTrigger && !activePanel) {
      const targetId = activeTrigger.getAttribute("data-target");

      if (targetId) {
        const targetPanel = menu.querySelector("#" + targetId);

        if (targetPanel) {
          targetPanel.classList.add("active");
        }
      }
    }
  });

  /* =========================================
     RESIZE HANDLER
  ========================================= */

  window.addEventListener("resize", function () {
    if (window.innerWidth > 991) {
      if (navMenu) {
        navMenu.classList.remove("active");
      }

      if (mobileToggle) {
        mobileToggle.classList.remove("active");
      }

      dropdownItems.forEach(function (item) {
        item.classList.remove("active");
      });
    }
  });

  window.addEventListener("scroll", function () {
    const header = document.querySelector(".heasdernewwww");

    if (!header) return;

    if (window.scrollY > 50) {
      header.classList.add("headeractive");
    } else {
      header.classList.remove("headeractive");
    }
  });
});
