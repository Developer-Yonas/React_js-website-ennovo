export function tardy(observed, setter, fromAbout) {
    const data = {
        root: null,
        threshold : fromAbout? .4: .05
    }
    const servObserver = new IntersectionObserver((entries)=>{
      const entry = entries[0];
        if(!entry.isIntersecting) return;
            setter(false)

        servObserver.unobserve(observed)

    },data)
    servObserver.observe(observed)
}