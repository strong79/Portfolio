import { motion } from "framer-motion";
import PropTypes from "prop-types";

const headingBaseClass =
  "text-6xl md:text-7xl font-bold mb-8 relative overflow-visible font-special";

export const SectionHeading = ({ children, className = "", motionProps = null }) => {
  const content = (
    <span className="relative inline-grid">
      <span className="section-gradient-title col-start-1 row-start-1 relative z-10">
        {children}
      </span>
      <span
        className="col-start-1 row-start-1 text-green/20 blur-sm animate-pulse pointer-events-none select-none"
        aria-hidden="true"
      >
        {children}
      </span>
    </span>
  );

  const headingClass = `${headingBaseClass} ${className}`.trim();

  if (motionProps) {
    return (
      <motion.h2 className={headingClass} {...motionProps}>
        {content}
      </motion.h2>
    );
  }

  return <h2 className={headingClass}>{content}</h2>;
};

SectionHeading.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  motionProps: PropTypes.object,
};

export const GradientHeading = ({
  children,
  className = "",
  gradient = "from-cyan via-green to-cyan",
}) => {
  const gradientClass =
    gradient === "from-green via-cyan to-green"
      ? "gradient-heading-inline bg-gradient-to-r from-green via-cyan to-green"
      : "section-gradient-title";

  return (
    <h2
      className={`text-6xl font-bold overflow-visible font-special inline-block ${className}`.trim()}
    >
      <span className={gradientClass}>{children}</span>
    </h2>
  );
};

GradientHeading.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  gradient: PropTypes.string,
};
