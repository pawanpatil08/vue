const highlightDirective = {
    bind: function (el, binding) {
        el.addEventListener('mouseenter', () => {
            el.style.background = binding.value || 'yellow';
        });

        el.addEventListener('mouseleave', () => {
            el.style.background = '';
        });
    }
};

export default highlightDirective;