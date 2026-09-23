<script>

document.addEventListener('DOMContentLoaded', function () {
  const tab = document.querySelector('#yourID');
  if (tab) {
    tab.addEventListener('click', function (e) {
      e.stopImmediatePropagation();
      window.open('yourLink/', '_blank');
    });
  }
});

</script>
