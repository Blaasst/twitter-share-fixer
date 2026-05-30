function fixShareMenu() {

  const menu = document.querySelector('[role="menu"]');
  if (!menu) return;

  const items = Array.from(menu.querySelectorAll('[role="menuitem"]'));
  if (items.length < 2) return;


  const chatItem = items.find(item => item.textContent.includes('Send via Chat'));
  const linkItem = items.find(item => item.textContent.includes('Copy link'));


  if (chatItem && linkItem) {

    menu.style.display = 'flex';
    menu.style.flexDirection = 'column';


    linkItem.style.order = '1';
    chatItem.style.order = '2';


    items.forEach(item => {
      if (item !== chatItem && item !== linkItem) {
        item.style.order = '3';
      }
    });
  }
}

// On observe les changements de la page
const observer = new MutationObserver(() => fixShareMenu());
observer.observe(document.body, { childList: true, subtree: true });
