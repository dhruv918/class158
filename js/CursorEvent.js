AFRAME.registerComponent("cursor-listener", {
    schema: {
        selectedItemId: { default: "", type:"string"},
    },
    init: function () {
        this.handleMouseEnterEvents()
        this.handleMouseLeaveEvents()
        console.log('init')

    },

    handlePlacesListState: function () {
        const id = this.el.getAttribute("id")
        const placesId = ["taj-mahal", "budapest", "eiffel-tower", "new-york-city"]
        console.log('if')
        if (placesId.includes(id)) {

            const placesContainer = document.querySelector('#places-container')
            placesContainer.setAttribute("cursor-listener", {
                selectedItemId: id
            
            })
            this.el.setAttribute("material", {
                color: "#D76B30",
                opacity: 1,

            })
        }
    },
    handleMouseEnterEvents: function () {
        this.el.addEventListener("mouseenter", () => {
            console.log('enter')
            this.handlePlacesListState()
            
        })
        
    },

    handleMouseLeaveEvents: function () {

        this.el.addEventListener("mouseleave", () => {
            const { selectedItemId } = this.data
            if (selectedItemId) {

                const el = document.querySelector(`#${selectedItemId}`)
                const id = el.getAttribute("id")
                if (id == selectedItemId) {
                    console.log('leave')

                    el.setAttribute("material", {
                        
                        color: "#0077CC",
                        opacity: 1,

                    })
                }
            }

        })

    }

})