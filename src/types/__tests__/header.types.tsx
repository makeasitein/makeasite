import { Header } from '../../components/Header';

// Valid usages should type-check
<Header />;
<Header className="top-0" />;
<Header onNavigate={(section) => {
  const s: string = section;
}} />;

// Invalid usages should produce type errors
// @ts-expect-error unknown prop is not allowed
<Header foo="bar" />;

// @ts-expect-error onNavigate must be a function
<Header onNavigate="home" />;

