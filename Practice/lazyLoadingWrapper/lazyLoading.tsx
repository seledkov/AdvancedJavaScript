export const useLazyScrollingWrapper = (
  refObserverContainer: React.MutableRefObject<HTMLElement>,
  refItemsContainer: React.MutableRefObject<HTMLElement>, // but ref === null in started
  callback, // cb need promise?
  deps, // need add data or cb result, this trigger update anchor element
) => {
  // todo - need update and request page logic into hook or components
  // const [dataPage, setDataPage] = useState<number>(0);
  //
  // const fetchNewData = () => {
  //   callback()
  //   // getData({ page: dataPage });
  //   setDataPage((prev) => prev + 1);
  // };

  useEffect(() => {
    const itemsContainer = refItemsContainer.current;
    const observerContainer = refObserverContainer.current;
    console.log('TS - container', itemsContainer?.children);

    if (itemsContainer?.children.length === 0) {
      return;
    }
    console.log('TS - call useLazy');

    const options = { root: observerContainer, threshold: 0.9 };
    const anchorElement: Element = itemsContainer.lastElementChild;

    const observer = new IntersectionObserver((elements, observer) => {
      elements.forEach((element) => {
        console.log('TS - element ', element);
        if (element.isIntersecting === true) {
          console.log('TS - entry called backend');

          callback();

          // unobserve after callback end, and need new observe - hook reused if change data into deps
          observer.unobserve(anchorElement);
          console.log('TS - unobserve');
        }
      });
    }, options);
    // const observer = new IntersectionObserver(()=>console.log('hi'), options)

    observer.observe(anchorElement);
    console.log('TS - observe start');

    return () => {
      observer.unobserve(anchorElement);
      console.log('TS - observe end');
    };
  }, [
    // ref.current,
    // refContainer.current,
    deps.length,
  ]);
};
