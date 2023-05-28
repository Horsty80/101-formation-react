import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

const ToggleNavigationContext = createContext({});

export const ToggleNavigationProvider = ({ children }) => {
  const [isToggle, setIsToggle] = useState(false);

  const toggleNavigation = useCallback(() => {
    console.log("click");
    setIsToggle((v) => !v);
  }, []);
  // const toggleNavigation = () => {
  //   console.log("click");
  //   setIsToggle((v) => !v);
  // };
  // return [isToggle, toggleNavigation];

  const memoedValues = useMemo(
    () => ({
      isToggle,
      toggleNavigation,
    }),
    [isToggle, toggleNavigation]
  );

  return (
    <ToggleNavigationContext.Provider value={memoedValues}>
      {children}
    </ToggleNavigationContext.Provider>
  );
};

export default function useToggleNavigation() {
  return useContext(ToggleNavigationContext);
}
