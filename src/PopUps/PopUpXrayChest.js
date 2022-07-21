import React from "react";
import Modal from "react-bootstrap4-modal";
import "bootstrap/dist/css/bootstrap.min.css";
import Form2 from "../Forms/form2";

export default class PopUpXrayChest extends React.Component {
  constructor() {
    super();
    this.state = {
      data: {
      },
      err: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleDone = this.handleDone.bind(this);
  }

  handleChange(data, err) {
    if (!err) {
      this.setState({ data }, () => this.props.handleData(data));
    }


    if (data.opacities) {
      if (data.opacitiesType) {
        document.querySelectorAll('label[id^="#/properties/opacities"]').forEach((el) => {
          el.classList.remove("err");
        });
      }
    }
    if (data.mildHaziness) {
      if (data.mildHazinessRUL || data.mildHazinessRML || data.mildHazinessRLL || data.mildHazinessLUL || data.mildHazinessRML || data.mildHazinessRLL) {
        document.querySelectorAll('label[id^="#/properties/mildHaziness"]').forEach((el) => {
          el.classList.remove("err");
        });
      }
    }
    // if (data.rightCostophrenicAngle) {
    //   if (data.rightCostophrenicAngle === 'Obliterated' || data.rightObliteratedType) {
    //     document.querySelectorAll('label[id^="#/properties/rightCostophrenicAngle"]').forEach((el) => {
    //       el.classList.remove("err");
    //     });
    //   }
    // }
    // if (data.leftCostophrenicAngle) {
    //   if (data.leftObliteratedType) {
    //     document.querySelectorAll('label[id^="#/properties/leftCostophrenicAngle"]').forEach((el) => {
    //       el.classList.remove("err");
    //     });
    //   }
    // }
    if (data.pneumothorax) {
      if (data.pneumothoraxL || data.pneumothoraxR) {
        document.querySelectorAll('label[id^="#/properties/pneumothorax"]').forEach((el) => {
          el.classList.remove("err");
        });
      }
    }


    if (data.bonyThoracicCage) {
      if ((data.vertebral || data.ribFracture || data.Clavicle || data.sternalSutures || data.bonyinfo)) {
        document.querySelectorAll('label[id^="#/properties/bonyThoracicCage"]').forEach((el) => {
          el.classList.remove("err");
        });
      }
    }

    if (data.tracheaAndMediastinalStructures) {
      document.querySelectorAll('label[id^="#/properties/tracheaAndMediastinalStructures"]').forEach((el) => {
        el.classList.remove("err");
      });
    }


    this.setState({ err });
  }

  // ***********************************************************************************
  handleDone() {
    const { data, err } = this.state;
    console.log("======data", data);

    if (!data.XrayTypes) {
      document.querySelectorAll('label[id^="#/properties/XrayTypes"]').forEach((el) => {
        el.classList.add("err");
      });
      return;
    }

    if (data.opacities) {
      if (!data.opacitiesType) {
        document.querySelectorAll('label[id^="#/properties/opacities"]').forEach((el) => {
          el.classList.add("err");
        });
        return;
      }
      if (data.opacitiesType) {
        if (!(data.opacitiesRUL || data.opacitiesRML || data.opacitiesRLL || data.opacitiesLUL || data.opacitiesLML || data.opacitiesLLL)) {
          document.querySelectorAll('label[id^="#/properties/opacities"]').forEach((el) => {
            el.classList.add("err");
          });
          return;
        }
      }
    }
    if (data.mildHaziness) {
      if (!(data.mildHazinessRUL || data.mildHazinessRML || data.mildHazinessRLL || data.mildHazinessLUL || data.mildHazinessLML || data.mildHazinessLLL)) {
        document.querySelectorAll('label[id^="#/properties/mildHaziness"]').forEach((el) => {
          el.classList.add("err");
        });
        return;
      }
    }

    if (data.opacities) {
      if (data.opacitiesType) {
        if ((data.opacitiesRUL || data.opacitiesRML || data.opacitiesRLL || data.opacitiesLUL || data.opacitiesLML || data.opacitiesLLL) && data.BothNormal) {
          document.querySelectorAll('label[id^="#/properties/mildHaziness"]').forEach((el) => {
            el.classList.add("err");
          });
          return;
        }
      }
    }

    if (data.rightHilarShadow) {
      if (!(data.ProminentImpressionRHS || data.CalcificationImpressionRHS)) {
        document.querySelectorAll('label[id^="#/properties/rightHilarShadow"]').forEach((el) => {
          el.classList.add("err");
        });
        return;
      }
    }

    if (data.leftHilarShadow) {
      if (!(data.ProminentImpressionLHS || data.CalcificationImpressionLHS)) {
        document.querySelectorAll('label[id^="#/properties/leftHilarShadow"]').forEach((el) => {
          el.classList.add("err");
        });
        return;
      }
    }

    if (data.pneumothorax) {
      if (!(data.pneumothoraxL || data.pneumothoraxR)) {
        document.querySelectorAll('label[id^="#/properties/pneumothorax"]').forEach((el) => {
          el.classList.add("err");
        });
        return;
      }
      if (!(data.pneumothoraxRType === 'Mild' || data.pneumothoraxRType === 'Moderate' || data.pneumothoraxRType === 'Severe'
        || data.pneumothoraxLType === 'Mild' || data.pneumothoraxLType === 'Moderate' || data.pneumothoraxLType === 'Severe')) {
        document.querySelectorAll('label[id^="#/properties/pneumothorax"]').forEach((el) => {
          el.classList.add("err");
        });
        return;
      }

    }

    if (data.SoftTissue) {
      if (!data.SoftText) {
        document.querySelectorAll('label[id^="#/properties/pneumothorax"]').forEach((el) => {
          el.classList.add("err");
        });
        return;
      }
    }

    if (data.bonyThoracicCage) {
      if (data.bonyThoracicCage === "Abnormal") {
        if (!(data.vertebral || data.ribFracture || data.Clavicle || data.sternalSutures || data.bonyinfo)) {
          document.querySelectorAll('label[id^="#/properties/bonyThoracicCage"]').forEach((el) => {
            el.classList.add("err");
          });
          return;
        }
        if (data.ribFracture) {
          if (!(data.ribFractureL || data.ribFractureR)) {
            document.querySelectorAll('label[id^="#/properties/bonyThoracicCage"]').forEach((el) => {
              el.classList.add("err");
            });
            return;
          }
          if (!(data.RibsL || data.RibsR)) {
            document.querySelectorAll('label[id^="#/properties/bonyThoracicCage"]').forEach((el) => {
              el.classList.add("err");
            });
            return;
          }
        }
        if (data.Clavicle) {
          if (!(data.ClavicleL || data.ClavicleR)) {
            document.querySelectorAll('label[id^="#/properties/bonyThoracicCage"]').forEach((el) => {
              el.classList.add("err");
            });
            return;
          }
          if (!(data.ClavicleLRType || data.ClavicleLRType1)) {
            document.querySelectorAll('label[id^="#/properties/bonyThoracicCage"]').forEach((el) => {
              el.classList.add("err");
            });
            return;
          }
        }



        if (data.bonyinfo) {
          if (!(data.bonyinfo)) {
            document.querySelector('legend[for="#/properties/bonyThoracicCage"]').forEach((el) => {
              el.classList.add("Mui-error");
              return;
            });
          }
        }
      }
    }

    if (data.DomesOfDiaphragm) {
      if (!(data.DomesLeft || data.DomesRight)) {
        document.querySelectorAll('label[id^="#/properties/DomesOfDiaphragm"]').forEach((el) => {
          el.classList.add("err");
        });
        return;
      }
      if (!(data.DomesLeftType || data.DomesRightType || data.DomesLeftElevatedType || data.DomesRightElevatedType)) {
        document.querySelectorAll('label[id^="#/properties/DomesOfDiaphragm"]').forEach((el) => {
          el.classList.add("err");
        });
        return;
      }
    }


    if (data.tracheaAndMediastinalStructures) {
      if (data.tracheaAndMediastinalStructures === 'shifted') {
        if (!data.tracheaAndMediastinalStructuresShifted) {
          document.querySelectorAll('label[id^="#/properties/tracheaAndMediastinalStructures"]').forEach((el) => {
            el.classList.add("err");
          });
          return;
        }
        if (!data.tracheaAndMediastinalStructuresShifted === 'right' || !data.tracheaAndMediastinalStructuresShifted === 'left') {
          document.querySelectorAll('label[id^="#/properties/tracheaAndMediastinalStructures"]').forEach((el) => {
            el.classList.add("err");
          });
          return;
        }
        if (!(data.tracheaAndMediastinalLeftImpression || data.tracheaAndMediastinalRightImpression)) {
          document.querySelectorAll('label[id^="#/properties/tracheaAndMediastinalStructures"]').forEach((el) => {
            el.classList.add("err");
          });
          return;
        }
      }

    }



    if (!err) {
      this.props.handleClick();
    }
  }

  // event handling methods go here
  render() {
    const { data, handleClick, name } = this.props;
    return (

      <Modal visible={true} onClickBackdrop={this.modalBackdropClicked}>

        <div className="modal-header">
          <h5 className="modal-title">{name}</h5>
          <div>
            <button type="button" className="btn btn-secondary" onClick={() => window.location.reload()}>Back</button>
            <button type="button" className="btn btn-primary" style={{ margin: '9px' }} onClick={this.handleDone}>Done</button>
          </div>

        </div>


        <div className="modal-body">
          <Form2 data={data} handleChange={this.handleChange} />
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" onClick={() => window.location.reload()}>Back</button>
          <button type="button" className="btn btn-primary" style={{ margin: '9px' }} onClick={this.handleDone}>Done</button>
        </div>
      </Modal>
    );
  }
}
