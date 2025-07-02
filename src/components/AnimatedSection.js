import { motion } from 'framer-motion';

const AnimatedSection = ({ children, delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay }}
            viewport={{ once: true, margin: "-100px" }}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedSection;