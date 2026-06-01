import { motion } from "framer-motion";

import { FaHandshake } from "react-icons/fa";

import { useTranslation } from "../../i18n/useTranslation";



const ContactText = () => {

  const { t } = useTranslation();



  return (

    <motion.div

      initial={{ opacity: 0, x: -30 }}

      whileInView={{ opacity: 1, x: 0 }}

      transition={{ duration: 0.8 }}

      className="relative z-10"

    >

      <div className="flex items-center gap-4 mb-6">

        <motion.div

          animate={{ scale: [1, 1.2, 1], rotate: [0, 5, -5, 0] }}

          transition={{ duration: 3, repeat: Infinity }}

          className="text-green text-3xl"

        >

          <FaHandshake />

        </motion.div>

        <div>

          <h2 className="text-4xl font-bold bg-gradient-to-r from-green via-cyan to-green bg-clip-text text-transparent">

            {t.contact.title}

          </h2>

          <p className="text-gray-400 text-sm mt-1 font-mono">{t.contact.subtitle}</p>

        </div>

      </div>



      <motion.div 

        initial={{ width: 0 }}

        whileInView={{ width: "6rem" }}

        transition={{ duration: 1, delay: 0.3 }}

        className="h-1 bg-gradient-to-r from-green to-cyan rounded-full mb-8"

      />



      <div className="space-y-6">

        <motion.div

          initial={{ opacity: 0, y: 20 }}

          whileInView={{ opacity: 1, y: 0 }}

          transition={{ duration: 0.6, delay: 0.4 }}

        >

          <p className="text-gray-300 text-lg leading-relaxed mb-4">

            {t.contact.message.before}{" "}

            <span className="text-green font-semibold">{t.contact.message.webApps}</span>,{" "}

            <span className="text-cyan font-semibold">{t.contact.message.saas}</span>, {t.about.p2.and}{" "}

            <span className="text-green font-semibold">{t.contact.message.aiSolutions}</span>
            {t.contact.message.after}

          </p>

        </motion.div>



        <motion.div

          initial={{ opacity: 0, y: 20 }}

          whileInView={{ opacity: 1, y: 0 }}

          transition={{ duration: 0.6, delay: 0.6 }}

          className="bg-gradient-to-r from-black/30 to-gray-900/30 rounded-xl p-6 border border-green/20 backdrop-blur-sm"

        >

          <span className="text-gray-300 font-semibold block mb-4">{t.contact.servicesTitle}</span>

          

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

            {t.contact.services.map((service, index) => (

              <motion.div

                key={index}

                whileHover={{ scale: 1.05, x: 5 }}

                className="flex items-center gap-3 p-2 rounded-lg hover:bg-black/20 transition-all duration-300"

              >

                <span className="text-gray-300 text-sm">{service}</span>

              </motion.div>

            ))}

          </div>

        </motion.div>



        <motion.div

          initial={{ opacity: 0, y: 20 }}

          whileInView={{ opacity: 1, y: 0 }}

          transition={{ duration: 0.6, delay: 0.8 }}

          className="bg-green/5 border border-green/20 rounded-lg p-4"

        >

          <p className="text-gray-300 text-sm leading-relaxed">

            <span className="text-green font-semibold block mb-1">{t.contact.quickResponse.title}</span>

            <span className="text-green font-semibold">{t.contact.quickResponse.highlight}</span>

            <br />

            {t.contact.quickResponse.body}

          </p>

        </motion.div>

      </div>



      <div className="absolute -top-4 -right-4 text-green/10 font-mono text-xs pointer-events-none">

        &lt;/contact&gt;

      </div>

    </motion.div>

  );

};



export default ContactText;

