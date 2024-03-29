import React, { Fragment, useRef, useState } from "react";
// 组件
import ValueOne from "components/value1";
// import ValueTwo from "components/value2";
// import ValueThree from "components/value3";
// import ValueFour from "components/value4";
// import ValueFive from "components/value5";
// import ValueSix from "components/value6";
// import ValueSeven from "components/value7";
// 头部和底部
import back from "assets/color.png";
import { Button } from "antd";
import styles from "./index.less";

// const componentMap = [
//   ValueOne,
//   ValueTwo,
//   ValueThree,
//   ValueFour,
//   ValueFive,
//   ValueSix,
//   ValueSeven
// ];

const ValueContent = [];

function Main() {
  const [stepIndex, setStepIndex] = useState(0);
  const validateRef0 = useRef(null);
  const validateRef1 = useRef(null);
  const validateRef2 = useRef(null);
  const validateRef3 = useRef(null);
  const validateRef4 = useRef(null);
  const validateRef5 = useRef(null);
  const validateRef6 = useRef(null);
  
  const handleBack = () => {
    console.log("回退功能，目前还没开发");
  };
  
  const goNext = () => {
    if (stepIndex === 0) {
      let [error, value] = validateRef0.current.validate1();
      if (!error) {
        value.type = 1;
        ValueContent.push(value);
        setStepIndex(c => c + 1);
      }
    } else if (stepIndex === 1) {
      let [err, values] = validateRef1.current.validate2();
      if (!err) {
        values.type = 2;
        ValueContent.push(values);
        setStepIndex(c => c + 1);
      }
    } else if (stepIndex === 2) {
      let [err, values] = validateRef2.current.validate3();
      if (!err) {
        values.type = 3;
        ValueContent.push(values);
        setStepIndex(c => c + 1);
      }
    } else if (stepIndex === 3) {
      let [err, values] = validateRef3.current.validate4();
      if (!err) {
        values.type = 4;
        ValueContent.push(values);
        setStepIndex(c => c + 1);
      }
    } else if (stepIndex === 4) {
      let [err, values] = validateRef4.current.validate5();
      if (!err) {
        values.type = 5;
        ValueContent.push(values);
        setStepIndex(c => c + 1);
      }
    } else if (stepIndex === 5) {
      let [err, values] = validateRef5.current.validate6();
      if (!err) {
        values.type = 6;
        ValueContent.push(values);
        setStepIndex(c => c + 1);
      }
    } else if (stepIndex === 6) {
      let [err, values] = validateRef6.current.validate7();
      if (!err) {
        values.type = 7;
        ValueContent.push(values);
        setStepIndex(c => c + 1);
      }
    }
  };
  const goPrev = () => {
    setStepIndex(c => c - 1);
  };
  return (
    <Fragment>
      <div className={styles.header}>
        <div className={styles.back} onClick={handleBack}>
          <img src={back} alt="back" />
        </div>
        <span className={styles.title}>填写信息</span>
      </div>
      <div className={styles.content}>
        <div className={styles.bgc}></div>
        <ValueOne />
        {/* {componentMap.map((FormItem, index) => {
          return(
            <FormItem
                  key={`Value${index}`}
                  class={stepIndex === index ? "" : "hide"}
                  wrappedComponentRef={eval(`validateRef${index}`)}
                  stepIndex={stepIndex === index ? index + 1 : ""}
                />
          )
        })} */}
      </div>
      <div className={styles.footer}>
        {stepIndex === 0 ? (
          <div className={styles.first}>
            <Button type="primary" onClick={goNext}>
              下一步
            </Button>
          </div>
        ) : stepIndex !== 6 ? (
          <div className={styles.middle}>
            <Button type="primary" className={styles.btn1} onClick={goPrev}>
              上一步
            </Button>
            <Button type="primary" className={styles.btn2} onClick={goNext}>
              下一步
            </Button>
          </div>
        ) : (
          <div className={styles.end}>
            <Button type="primary" className={styles.btn1} onClick={goPrev}>
              上一步
            </Button>
            <Button type="primary" className={styles.btn2}>
              开始估值
            </Button>
          </div>
        )}
      </div>
    </Fragment>
  );
}

export default Main;
