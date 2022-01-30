import React, { useState, useRef, useEffect } from "react";
import { useObserverWithUnObserve } from "../../utils/useObserverWithUnObserver";
import { useOrientation } from "../../utils/useOrientation";
import { useTranslation } from "react-i18next";

import FullCurtain from "../../components/animation/full-curtain";
import SideBar from "../../components/sidebar";
import ParallaxBox from "../../components/experiences/parallax-box";
import ParallaxMobile from "../../components/experiences/parallax-box-mobile";
import ScrollToDiscover from "../../components/scroll-to-discover";
import HamburgerMenu from "../../components/hamburger-menu";

// Desktop
import Education from "../../components/experiences/ui/education";
import Internship from "../../components/experiences/ui/internship";
import Business from "../../components/experiences/ui/business";
import Working from "../../components/experiences/ui/working";

// Mobile
import EducationMobile from "../../components/experiences/mobile/education";
import InternShipMobile from "../../components/experiences/mobile/internship";
import BusinessMobile from "../../components/experiences/mobile/business";
import WorkingMobile from "../../components/experiences/mobile/working";

import ExpreriencesData from "../../data/experiences";

const Experiences = () => {
  const [isOpenCurtain, setIsOpenCurtain] = useState(true);
  const [educations, setEducations] = useState([]);
  const [internships, setInternships] = useState([]);
  const [business, setBusiness] = useState([]);
  const [workAsAnEmployee, setWorkAsAnEmployee] = useState([]);
  const observer = useObserverWithUnObserve;
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const [isLoaded, setLoaded] = useState(false);

  const educationParallaxWrapper = useRef(null);
  const internshipParallaxWrapper = useRef(null);
  const businessParallaxWrapper = useRef(null);
  const workParallaxWrapper = useRef(null);

  const educationContainerWrapper = useRef(null);
  const internshipContainerWrapper = useRef(null);
  const businessContainerWrapper = useRef(null);
  const workContainerWrapper = useRef(null);
  const isMobile = useOrientation();

  useEffect(() => {
    if (currentLanguage === "en") {
      const tempEducations = ExpreriencesData.filter(
        (item) => item.en.exp_type === 1
      );
      const tempInternships = ExpreriencesData.filter(
        (item) => item.en.exp_type === 2
      );
      const tempBusiness = ExpreriencesData.filter(
        (item) => item.en.exp_type === 3
      );
      const tempWorkAsAnEmployee = ExpreriencesData.filter(
        (item) => item.en.exp_type === 4
      );

      setEducations(tempEducations);
      setInternships(tempInternships);
      setBusiness(tempBusiness);
      setWorkAsAnEmployee(tempWorkAsAnEmployee);
      setLoaded(true);
    } else if (currentLanguage === "th") {
      const tempEducations = ExpreriencesData.filter(
        (item) => item.th.exp_type === 1
      );
      const tempInternships = ExpreriencesData.filter(
        (item) => item.th.exp_type === 2
      );
      const tempBusiness = ExpreriencesData.filter(
        (item) => item.th.exp_type === 3
      );
      const tempWorkAsAnEmployee = ExpreriencesData.filter(
        (item) => item.th.exp_type === 4
      );
      setEducations(tempEducations);
      setInternships(tempInternships);
      setBusiness(tempBusiness);
      setWorkAsAnEmployee(tempWorkAsAnEmployee);
      setLoaded(true);
    }
  }, [currentLanguage]);

  useEffect(() => {
    if (isLoaded && currentLanguage) {
      // Parallax Observing
      observer(educationParallaxWrapper.current, "label-appear");
      observer(internshipParallaxWrapper.current, "label-appear");
      observer(businessParallaxWrapper.current, "label-appear");
      if (workAsAnEmployee.length !== 0)
        observer(workParallaxWrapper.current, "label-appear");
      // Content Observing
      observer(educationContainerWrapper.current, "education-container-appear");
      observer(
        internshipContainerWrapper.current,
        "internship-container-appear"
      );
      observer(businessContainerWrapper.current, "business-container-appear");
      if (workAsAnEmployee.length !== 0)
        observer(workContainerWrapper.current, "working-container-appear");
    }
  }, [observer, workAsAnEmployee.length, isLoaded, currentLanguage]);

  return (
    isLoaded && (
      <SideBar setIsOpenCurtain={setIsOpenCurtain}>
        <FullCurtain isOpen={isOpenCurtain} />
        {isMobile && <HamburgerMenu setIsOpenCurtain={setIsOpenCurtain} />}
        {!isMobile && (
          <section className='exp-main-container'>
            <ParallaxBox
              label={currentLanguage === "en" ? "education" : "การศึกษา"}
              id='education'
              img={
                "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
              }
              ref={educationParallaxWrapper}
              lang={currentLanguage}
            />
            <Education
              educations={educations}
              ref={educationContainerWrapper}
              lang={currentLanguage}
            />
            <ParallaxBox
              label={currentLanguage === "en" ? "internship" : "ฝึกงาน"}
              id='internship'
              img={
                "https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              }
              ref={internshipParallaxWrapper}
              lang={currentLanguage}
            />
            <Internship
              internships={internships}
              ref={internshipContainerWrapper}
              lang={currentLanguage}
            />
            <ParallaxBox
              label={currentLanguage === "en" ? "business" : "ธุรกิจส่วนตัว"}
              id='business'
              img={
                "https://images.unsplash.com/photo-1460794418188-1bb7dba2720d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              }
              ref={businessParallaxWrapper}
              lang={currentLanguage}
            />
            <Business
              business={business}
              ref={businessContainerWrapper}
              lang={currentLanguage}
            />
            {workAsAnEmployee.length !== 0 && (
              <ParallaxBox
                label={currentLanguage === "en" ? "work" : "การทำงาน"}
                id='work'
                img={
                  "https://images.unsplash.com/photo-1497493292307-31c376b6e479?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
                }
                ref={workParallaxWrapper}
                lang={currentLanguage}
              />
            )}
            {workAsAnEmployee.length !== 0 && (
              <Working
                work_as_an_employee={workAsAnEmployee}
                ref={workContainerWrapper}
                lang={currentLanguage}
              />
            )}
            <ScrollToDiscover lang={currentLanguage} />
          </section>
        )}
        {isMobile && (
          <section className='exp-main-mobile-container'>
            <ParallaxMobile
              label={currentLanguage === "en" ? "education" : "การศึกษา"}
              id='education'
              img={
                "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
              }
              ref={educationParallaxWrapper}
              lang={currentLanguage}
            />
            <EducationMobile
              educations={educations}
              ref={educationContainerWrapper}
              lang={currentLanguage}
            />
            <ParallaxMobile
              label={currentLanguage === "en" ? "internship" : "ฝึกงาน"}
              id='internship'
              img={
                "https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              }
              ref={internshipParallaxWrapper}
              lang={currentLanguage}
            />
            <InternShipMobile
              internships={internships}
              ref={internshipContainerWrapper}
              lang={currentLanguage}
            />
            <ParallaxMobile
              label={currentLanguage === "en" ? "business" : "ธุรกิจส่วนตัว"}
              id='business'
              img={
                "https://images.unsplash.com/photo-1460794418188-1bb7dba2720d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              }
              ref={businessParallaxWrapper}
              lang={currentLanguage}
            />
            <BusinessMobile
              business={business}
              ref={businessContainerWrapper}
              lang={currentLanguage}
            />
            {workAsAnEmployee.length !== 0 && (
              <ParallaxMobile
                label={currentLanguage === "en" ? "working" : "การทำงาน"}
                id='working'
                img={
                  "https://images.unsplash.com/photo-1497493292307-31c376b6e479?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
                }
                ref={workParallaxWrapper}
                lang={currentLanguage}
              />
            )}
            {workAsAnEmployee.length !== 0 && (
              <WorkingMobile
                works={workAsAnEmployee}
                ref={workContainerWrapper}
                lang={currentLanguage}
              />
            )}
          </section>
        )}
      </SideBar>
    )
  );
};

export default Experiences;
