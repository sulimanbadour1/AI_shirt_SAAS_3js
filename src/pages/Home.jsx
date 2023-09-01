import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";

import CustomButton from "../components/CustomButton";
import state from "../store";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion";

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation("left")}>
          <motion.header {...slideAnimation("down")}>
            <img
              src="./sblogo.png"
              alt="logo"
              className="w-36 h-36 object-contain"
            />
          </motion.header>
          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text">
                LET'S <br className="xl:block hidden" /> DO IT.
              </h1>
            </motion.div>
            <motion.div
              {...headContentAnimation}
              className="flex flex-col gap-5"
            >
              <p className="max-w-md font-normal text-gray-600 text-base">
                Create your unique and amazing shirt with our brand new 3D
                customization tool. <br />
                <br />
                <bold>
                  Unleash your imagination and define your own style,
                </bold>{" "}
                <i>
                  Also we have AI to make you design a{" "}
                  <strong>SPECTACULAR </strong> brand.
                  <br />
                  <strong>Try it out now!</strong> 🚀
                </i>
              </p>

              <CustomButton
                type="filled"
                title="Customize it"
                handleClick={() => (state.intro = false)}
                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Home;
