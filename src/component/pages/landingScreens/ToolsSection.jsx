import { ReactComponent as Dot } from "../../../assets/svgs/dot.svg";
import slackIcon from "../../../assets/img/home3/icon/slack-icon.svg";
import driveIcon from "../../../assets/img/home3/icon/drive-icon.svg";
import dropboxIcon from "../../../assets/img/home3/icon/dropbox-icon.svg";
import notionIcon from "../../../assets/img/home3/icon/notion-icon.svg";
import mailchimpIcon from "../../../assets/img/home3/icon/mailchimp-icon.svg";
import discordIcon from "../../../assets/img/home3/icon/discord.svg";

function ToolsSection() {
  return (
    <div className="home3-tools-section mb-110">
      <div className="container">
        <div className="row justify-content-center mb-60">
          <div className="col-lg-8">
            <div
              className="section-title text-center wow animate fadeInDown"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <span>
                <Dot />
                Connect Fast
                <Dot />
              </span>
              <h2>Integrate your favorite tools</h2>
              <p>
                Welcome to HRWHIZZ, where digital innovation meets strategic
                excellence. As a dynamic force in the realm of digital
                marketing, we are dedicated to propelling businesses into the
                spotlight of online success.
              </p>
            </div>
          </div>
        </div>
        <div className="row g-4">
          <div
            className="col-lg-4 col-sm-6 wow animate fadeInDown"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            <div className="tools-card">
              <div className="icon">
                <img src={slackIcon} alt="Logo" />
              </div>
              <div className="content">
                <h6>Slack</h6>
                <p>
                  On the other hand denounce with right eou info and dislike
                  beguled.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-sm-6 wow animate fadeInDown"
            data-wow-delay="400ms"
            data-wow-duration="1500ms"
          >
            <div className="tools-card">
              <div className="icon">
                <img src={driveIcon} alt="Logo" />
              </div>
              <div className="content">
                <h6>Drive</h6>
                <p>
                  On the other hand denounce with right eou info and dislike
                  beguled.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-sm-6 wow animate fadeInDown"
            data-wow-delay="600ms"
            data-wow-duration="1500ms"
          >
            <div className="tools-card">
              <div className="icon">
                <img src={dropboxIcon} alt="Logo" />
              </div>
              <div className="content">
                <h6>Dropbox</h6>
                <p>
                  On the other hand denounce with right eou info and dislike
                  beguled.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-sm-6 wow animate fadeInDown"
            data-wow-delay="600ms"
            data-wow-duration="1500ms"
          >
            <div className="tools-card">
              <div className="icon">
                <img src={notionIcon} alt="Logo" />
              </div>
              <div className="content">
                <h6>Notion</h6>
                <p>
                  On the other hand denounce with right eou info and dislike
                  beguled.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-sm-6 wow animate fadeInDown"
            data-wow-delay="400ms"
            data-wow-duration="1500ms"
          >
            <div className="tools-card">
              <div className="icon">
                <img src={mailchimpIcon} alt="Logo" />
              </div>
              <div className="content">
                <h6>Mailchimp</h6>
                <p>
                  On the other hand denounce with right eou info and dislike
                  beguled.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-sm-6 wow animate fadeInDown"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            <div className="tools-card">
              <div className="icon">
                <img src={discordIcon} alt="Logo" />
              </div>
              <div className="content">
                <h6>Discord</h6>
                <p>
                  On the other hand denounce with right eou info and dislike
                  beguled.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToolsSection;
