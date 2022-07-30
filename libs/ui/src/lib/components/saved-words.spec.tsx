import { render } from '@testing-library/react';

import SavedWords from './saved-words';

describe('SavedWords', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SavedWords />);
    expect(baseElement).toBeTruthy();
  });
});
