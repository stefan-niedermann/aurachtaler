document.addEventListener('DOMContentLoaded', function () {
    M.Sidenav.init(document.querySelectorAll('.sidenav'));
    M.Collapsible.init(document.querySelectorAll('.collapsible'));
    M.Tooltip.init(document.querySelectorAll('.tooltipped'));
    if (!document.documentMode) { // https://github.com/Dogfalo/materialize/issues/5801
        M.Materialbox.init(document.querySelectorAll('.materialboxed'));
    }
});