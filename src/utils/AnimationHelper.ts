export const threshold100 = (): number[] => {
    const threshold = [0];
    for (let i = 1; i <= 100; i++) {
        threshold.push(i / 100);
    }
    return threshold;
}

export const addIntersectionObserverOn = (elementId: string, observerInteraction: (entries: IntersectionObserverEntry[]) => void) => {
    const observedElement = document.getElementById(elementId);
    const observer = new IntersectionObserver((entries) => observerInteraction(entries),
        {
            root: null,
            rootMargin: '0px',
            threshold: threshold100(),
        });

    if (observedElement) {
        observer.observe(observedElement);
    }
}
