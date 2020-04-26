import Vue from 'vue';


 const expand = {
    inserted: function(el, binding)
    {
        if (binding.value !== null)
        {
            function calcHeight()
            {
                const currentState = el.getAttribute('aria-expanded')

                el.classList.add('u-no-transition')
                el.removeAttribute('aria-expanded')
                el.style.height = null
                el.style.height = el.clientHeight + 'px'
                el.setAttribute('aria-expanded', currentState)

                setTimeout(function()
                {
                    el.classList.remove('u-no-transition')
                })
            }

            el.classList.add('expand')
            el.setAttribute('aria-expanded', (binding.value) ? 'true' : 'false')
            calcHeight()
            window.addEventListener('resize', calcHeight)
        }
    },
    update: function(el, binding)
    {
        if (el.style.height && binding.value !== null)
        {
            el.setAttribute('aria-expanded', (binding.value) ? 'true' : 'false')
        }
    },

}

export default expand;
Vue.directive('expand', expand)