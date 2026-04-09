import React, { useContext, useState, useCallback, useMemo } from 'react';

export {
  DARK_PREVIEW_CSS,
  DARK_PREVIEW_CSS_RAW,
  DARK_EDITOR_CSS_RAW,
} from './darkModeCss';

interface DarkPreviewContextType {
  darkPreview: boolean;
  toggleDarkPreview: () => void;
}

const DarkPreviewContext = React.createContext<DarkPreviewContextType>({
  darkPreview: false,
  toggleDarkPreview: () => {},
});

export const useDarkPreview = () => useContext(DarkPreviewContext);

export const DarkPreviewProvider: React.FC<{ children?: React.ReactNode }> = props => {
  const [darkPreview, setDarkPreview] = useState(false);
  const toggleDarkPreview = useCallback(() => setDarkPreview(d => !d), []);

  const value = useMemo(
    () => ({ darkPreview, toggleDarkPreview }),
    [darkPreview, toggleDarkPreview],
  );

  return (
    <DarkPreviewContext.Provider value={value}>
      {props.children}
    </DarkPreviewContext.Provider>
  );
};
