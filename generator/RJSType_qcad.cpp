
  // Automatically generated, do not edit
  
        #include "RJSType_qcad.h"
      

  
      int RJSType_RMouseCoordinateListener::id = -1;

      int RJSType_RMouseCoordinateListener::getId() const {
          return RJSType_RMouseCoordinateListener::getIdStatic();
      }

      int RJSType_RMouseCoordinateListener::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RMouseCoordinateListener());
          }
          return id;
      }


      
        bool RJSType_RMouseCoordinateListener::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      

  

  
      int RJSType_REntity::id = -1;

      int RJSType_REntity::getId() const {
          return RJSType_REntity::getIdStatic();
      }

      int RJSType_REntity::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_REntity());
          }
          return id;
      }


      
        bool RJSType_REntity::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
                RJSType_RArcEntity::getIdStatic()
                ,
                RJSType_RAttributeDefinitionEntity::getIdStatic()
                ,
                RJSType_RAttributeEntity::getIdStatic()
                ,
                RJSType_RBlockReferenceEntity::getIdStatic()
                ,
                RJSType_RCircleEntity::getIdStatic()
                ,
                RJSType_RDimAlignedEntity::getIdStatic()
                ,
                RJSType_RDimAngular2LEntity::getIdStatic()
                ,
                RJSType_RDimAngular3PEntity::getIdStatic()
                ,
                RJSType_RDimAngularEntity::getIdStatic()
                ,
                RJSType_RDimArcLengthEntity::getIdStatic()
                ,
                RJSType_RDimDiametricEntity::getIdStatic()
                ,
                RJSType_RDimensionEntity::getIdStatic()
                ,
                RJSType_RDimLinearEntity::getIdStatic()
                ,
                RJSType_RDimOrdinateEntity::getIdStatic()
                ,
                RJSType_RDimRadialEntity::getIdStatic()
                ,
                RJSType_RDimRotatedEntity::getIdStatic()
                ,
                RJSType_REllipseEntity::getIdStatic()
                ,
                RJSType_RFaceEntity::getIdStatic()
                ,
                RJSType_RHatchEntity::getIdStatic()
                ,
                RJSType_RImageEntity::getIdStatic()
                ,
                RJSType_RLeaderEntity::getIdStatic()
                ,
                RJSType_RLineEntity::getIdStatic()
                ,
                RJSType_RPointEntity::getIdStatic()
                ,
                RJSType_RPolylineEntity::getIdStatic()
                ,
                RJSType_RRayEntity::getIdStatic()
                ,
                RJSType_RSolidEntity::getIdStatic()
                ,
                RJSType_RSplineEntity::getIdStatic()
                ,
                RJSType_RTextBasedEntity::getIdStatic()
                ,
                RJSType_RTextEntity::getIdStatic()
                ,
                RJSType_RToleranceEntity::getIdStatic()
                ,
                RJSType_RTraceEntity::getIdStatic()
                ,
                RJSType_RViewportEntity::getIdStatic()
                ,
                RJSType_RWipeoutEntity::getIdStatic()
                ,
                RJSType_RXLineEntity::getIdStatic()
                
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RShape::id = -1;

      int RJSType_RShape::getId() const {
          return RJSType_RShape::getIdStatic();
      }

      int RJSType_RShape::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RShape());
          }
          return id;
      }


      
        bool RJSType_RShape::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
                RJSType_RArc::getIdStatic()
                ,
                RJSType_RCircle::getIdStatic()
                ,
                RJSType_REllipse::getIdStatic()
                ,
                RJSType_RLine::getIdStatic()
                ,
                RJSType_RPoint::getIdStatic()
                ,
                RJSType_RPolyline::getIdStatic()
                ,
                RJSType_RRay::getIdStatic()
                ,
                RJSType_RSpline::getIdStatic()
                ,
                RJSType_RTextLabel::getIdStatic()
                ,
                RJSType_RTriangle::getIdStatic()
                ,
                RJSType_RXLine::getIdStatic()
                
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RArc::id = -1;

      int RJSType_RArc::getId() const {
          return RJSType_RArc::getIdStatic();
      }

      int RJSType_RArc::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RArc());
          }
          return id;
      }


      
        bool RJSType_RArc::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
                RJSType_RArcData::getIdStatic()
                
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RCircle::id = -1;

      int RJSType_RCircle::getId() const {
          return RJSType_RCircle::getIdStatic();
      }

      int RJSType_RCircle::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RCircle());
          }
          return id;
      }


      
        bool RJSType_RCircle::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
                RJSType_RCircleData::getIdStatic()
                
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_REllipse::id = -1;

      int RJSType_REllipse::getId() const {
          return RJSType_REllipse::getIdStatic();
      }

      int RJSType_REllipse::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_REllipse());
          }
          return id;
      }


      
        bool RJSType_REllipse::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
                RJSType_REllipseData::getIdStatic()
                
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RLine::id = -1;

      int RJSType_RLine::getId() const {
          return RJSType_RLine::getIdStatic();
      }

      int RJSType_RLine::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RLine());
          }
          return id;
      }


      
        bool RJSType_RLine::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
                RJSType_RLineData::getIdStatic()
                
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RPoint::id = -1;

      int RJSType_RPoint::getId() const {
          return RJSType_RPoint::getIdStatic();
      }

      int RJSType_RPoint::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RPoint());
          }
          return id;
      }


      
        bool RJSType_RPoint::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
                RJSType_RPointData::getIdStatic()
                ,
                RJSType_RTextLabel::getIdStatic()
                ,
                RJSType_RViewportData::getIdStatic()
                
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RRay::id = -1;

      int RJSType_RRay::getId() const {
          return RJSType_RRay::getIdStatic();
      }

      int RJSType_RRay::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RRay());
          }
          return id;
      }


      
        bool RJSType_RRay::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
                RJSType_RRayData::getIdStatic()
                
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RSpline::id = -1;

      int RJSType_RSpline::getId() const {
          return RJSType_RSpline::getIdStatic();
      }

      int RJSType_RSpline::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RSpline());
          }
          return id;
      }


      
        bool RJSType_RSpline::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
                RJSType_RSplineData::getIdStatic()
                
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RTriangle::id = -1;

      int RJSType_RTriangle::getId() const {
          return RJSType_RTriangle::getIdStatic();
      }

      int RJSType_RTriangle::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RTriangle());
          }
          return id;
      }


      
        bool RJSType_RTriangle::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RXLine::id = -1;

      int RJSType_RXLine::getId() const {
          return RJSType_RXLine::getIdStatic();
      }

      int RJSType_RXLine::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RXLine());
          }
          return id;
      }


      
        bool RJSType_RXLine::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
                RJSType_RRay::getIdStatic()
                ,
                RJSType_RXLineData::getIdStatic()
                
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RTextLabel::id = -1;

      int RJSType_RTextLabel::getId() const {
          return RJSType_RTextLabel::getIdStatic();
      }

      int RJSType_RTextLabel::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RTextLabel());
          }
          return id;
      }


      
        bool RJSType_RTextLabel::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      

  
      int RJSType_RObject::id = -1;

      int RJSType_RObject::getId() const {
          return RJSType_RObject::getIdStatic();
      }

      int RJSType_RObject::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RObject());
          }
          return id;
      }


      
        bool RJSType_RObject::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
                RJSType_RArcEntity::getIdStatic()
                ,
                RJSType_RAttributeDefinitionEntity::getIdStatic()
                ,
                RJSType_RAttributeEntity::getIdStatic()
                ,
                RJSType_RBlock::getIdStatic()
                ,
                RJSType_RBlockReferenceEntity::getIdStatic()
                ,
                RJSType_RCircleEntity::getIdStatic()
                ,
                RJSType_RDimAlignedEntity::getIdStatic()
                ,
                RJSType_RDimAngular2LEntity::getIdStatic()
                ,
                RJSType_RDimAngular3PEntity::getIdStatic()
                ,
                RJSType_RDimAngularEntity::getIdStatic()
                ,
                RJSType_RDimArcLengthEntity::getIdStatic()
                ,
                RJSType_RDimDiametricEntity::getIdStatic()
                ,
                RJSType_RDimensionEntity::getIdStatic()
                ,
                RJSType_RDimLinearEntity::getIdStatic()
                ,
                RJSType_RDimOrdinateEntity::getIdStatic()
                ,
                RJSType_RDimRadialEntity::getIdStatic()
                ,
                RJSType_RDimRotatedEntity::getIdStatic()
                ,
                RJSType_RDimStyle::getIdStatic()
                ,
                RJSType_RDocumentVariables::getIdStatic()
                ,
                RJSType_REllipseEntity::getIdStatic()
                ,
                RJSType_REntity::getIdStatic()
                ,
                RJSType_RFaceEntity::getIdStatic()
                ,
                RJSType_RHatchEntity::getIdStatic()
                ,
                RJSType_RImageEntity::getIdStatic()
                ,
                RJSType_RLayer::getIdStatic()
                ,
                RJSType_RLayerState::getIdStatic()
                ,
                RJSType_RLayout::getIdStatic()
                ,
                RJSType_RLeaderEntity::getIdStatic()
                ,
                RJSType_RLineEntity::getIdStatic()
                ,
                RJSType_RLinetype::getIdStatic()
                ,
                RJSType_RPointEntity::getIdStatic()
                ,
                RJSType_RPolylineEntity::getIdStatic()
                ,
                RJSType_RRayEntity::getIdStatic()
                ,
                RJSType_RSolidEntity::getIdStatic()
                ,
                RJSType_RSplineEntity::getIdStatic()
                ,
                RJSType_RTextBasedEntity::getIdStatic()
                ,
                RJSType_RTextEntity::getIdStatic()
                ,
                RJSType_RToleranceEntity::getIdStatic()
                ,
                RJSType_RTraceEntity::getIdStatic()
                ,
                RJSType_RUcs::getIdStatic()
                ,
                RJSType_RView::getIdStatic()
                ,
                RJSType_RViewportEntity::getIdStatic()
                ,
                RJSType_RWipeoutEntity::getIdStatic()
                ,
                RJSType_RXLineEntity::getIdStatic()
                
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RArcEntity::id = -1;

      int RJSType_RArcEntity::getId() const {
          return RJSType_RArcEntity::getIdStatic();
      }

      int RJSType_RArcEntity::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RArcEntity());
          }
          return id;
      }


      
        bool RJSType_RArcEntity::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RAttributeDefinitionEntity::id = -1;

      int RJSType_RAttributeDefinitionEntity::getId() const {
          return RJSType_RAttributeDefinitionEntity::getIdStatic();
      }

      int RJSType_RAttributeDefinitionEntity::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RAttributeDefinitionEntity());
          }
          return id;
      }


      
        bool RJSType_RAttributeDefinitionEntity::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RAttributeEntity::id = -1;

      int RJSType_RAttributeEntity::getId() const {
          return RJSType_RAttributeEntity::getIdStatic();
      }

      int RJSType_RAttributeEntity::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RAttributeEntity());
          }
          return id;
      }


      
        bool RJSType_RAttributeEntity::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RBlock::id = -1;

      int RJSType_RBlock::getId() const {
          return RJSType_RBlock::getIdStatic();
      }

      int RJSType_RBlock::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RBlock());
          }
          return id;
      }


      
        bool RJSType_RBlock::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RBlockReferenceEntity::id = -1;

      int RJSType_RBlockReferenceEntity::getId() const {
          return RJSType_RBlockReferenceEntity::getIdStatic();
      }

      int RJSType_RBlockReferenceEntity::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RBlockReferenceEntity());
          }
          return id;
      }


      
        bool RJSType_RBlockReferenceEntity::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RCircleEntity::id = -1;

      int RJSType_RCircleEntity::getId() const {
          return RJSType_RCircleEntity::getIdStatic();
      }

      int RJSType_RCircleEntity::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RCircleEntity());
          }
          return id;
      }


      
        bool RJSType_RCircleEntity::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RDimAlignedEntity::id = -1;

      int RJSType_RDimAlignedEntity::getId() const {
          return RJSType_RDimAlignedEntity::getIdStatic();
      }

      int RJSType_RDimAlignedEntity::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RDimAlignedEntity());
          }
          return id;
      }


      
        bool RJSType_RDimAlignedEntity::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RDimAngular2LEntity::id = -1;

      int RJSType_RDimAngular2LEntity::getId() const {
          return RJSType_RDimAngular2LEntity::getIdStatic();
      }

      int RJSType_RDimAngular2LEntity::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RDimAngular2LEntity());
          }
          return id;
      }


      
        bool RJSType_RDimAngular2LEntity::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RDimAngular3PEntity::id = -1;

      int RJSType_RDimAngular3PEntity::getId() const {
          return RJSType_RDimAngular3PEntity::getIdStatic();
      }

      int RJSType_RDimAngular3PEntity::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RDimAngular3PEntity());
          }
          return id;
      }


      
        bool RJSType_RDimAngular3PEntity::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RDimAngularData::id = -1;

      int RJSType_RDimAngularData::getId() const {
          return RJSType_RDimAngularData::getIdStatic();
      }

      int RJSType_RDimAngularData::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RDimAngularData());
          }
          return id;
      }


      
        bool RJSType_RDimAngularData::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
                RJSType_RDimAngular2LData::getIdStatic()
                ,
                RJSType_RDimAngular3PData::getIdStatic()
                ,
                RJSType_RDimArcLengthData::getIdStatic()
                
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RDimAngularEntity::id = -1;

      int RJSType_RDimAngularEntity::getId() const {
          return RJSType_RDimAngularEntity::getIdStatic();
      }

      int RJSType_RDimAngularEntity::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RDimAngularEntity());
          }
          return id;
      }


      
        bool RJSType_RDimAngularEntity::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
                RJSType_RDimAngular2LEntity::getIdStatic()
                ,
                RJSType_RDimAngular3PEntity::getIdStatic()
                ,
                RJSType_RDimArcLengthEntity::getIdStatic()
                
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RDimArcLengthEntity::id = -1;

      int RJSType_RDimArcLengthEntity::getId() const {
          return RJSType_RDimArcLengthEntity::getIdStatic();
      }

      int RJSType_RDimArcLengthEntity::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RDimArcLengthEntity());
          }
          return id;
      }


      
        bool RJSType_RDimArcLengthEntity::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RDimDiametricEntity::id = -1;

      int RJSType_RDimDiametricEntity::getId() const {
          return RJSType_RDimDiametricEntity::getIdStatic();
      }

      int RJSType_RDimDiametricEntity::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RDimDiametricEntity());
          }
          return id;
      }


      
        bool RJSType_RDimDiametricEntity::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RDimLinearEntity::id = -1;

      int RJSType_RDimLinearEntity::getId() const {
          return RJSType_RDimLinearEntity::getIdStatic();
      }

      int RJSType_RDimLinearEntity::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RDimLinearEntity());
          }
          return id;
      }


      
        bool RJSType_RDimLinearEntity::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
                RJSType_RDimAlignedEntity::getIdStatic()
                ,
                RJSType_RDimRotatedEntity::getIdStatic()
                
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RDimOrdinateEntity::id = -1;

      int RJSType_RDimOrdinateEntity::getId() const {
          return RJSType_RDimOrdinateEntity::getIdStatic();
      }

      int RJSType_RDimOrdinateEntity::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RDimOrdinateEntity());
          }
          return id;
      }


      
        bool RJSType_RDimOrdinateEntity::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RDimRadialEntity::id = -1;

      int RJSType_RDimRadialEntity::getId() const {
          return RJSType_RDimRadialEntity::getIdStatic();
      }

      int RJSType_RDimRadialEntity::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RDimRadialEntity());
          }
          return id;
      }


      
        bool RJSType_RDimRadialEntity::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RDimRotatedEntity::id = -1;

      int RJSType_RDimRotatedEntity::getId() const {
          return RJSType_RDimRotatedEntity::getIdStatic();
      }

      int RJSType_RDimRotatedEntity::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RDimRotatedEntity());
          }
          return id;
      }


      
        bool RJSType_RDimRotatedEntity::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RDimStyle::id = -1;

      int RJSType_RDimStyle::getId() const {
          return RJSType_RDimStyle::getIdStatic();
      }

      int RJSType_RDimStyle::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RDimStyle());
          }
          return id;
      }


      
        bool RJSType_RDimStyle::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RDimensionEntity::id = -1;

      int RJSType_RDimensionEntity::getId() const {
          return RJSType_RDimensionEntity::getIdStatic();
      }

      int RJSType_RDimensionEntity::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RDimensionEntity());
          }
          return id;
      }


      
        bool RJSType_RDimensionEntity::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
                RJSType_RDimAlignedEntity::getIdStatic()
                ,
                RJSType_RDimAngular2LEntity::getIdStatic()
                ,
                RJSType_RDimAngular3PEntity::getIdStatic()
                ,
                RJSType_RDimAngularEntity::getIdStatic()
                ,
                RJSType_RDimArcLengthEntity::getIdStatic()
                ,
                RJSType_RDimDiametricEntity::getIdStatic()
                ,
                RJSType_RDimLinearEntity::getIdStatic()
                ,
                RJSType_RDimOrdinateEntity::getIdStatic()
                ,
                RJSType_RDimRadialEntity::getIdStatic()
                ,
                RJSType_RDimRotatedEntity::getIdStatic()
                
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RDocumentVariables::id = -1;

      int RJSType_RDocumentVariables::getId() const {
          return RJSType_RDocumentVariables::getIdStatic();
      }

      int RJSType_RDocumentVariables::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RDocumentVariables());
          }
          return id;
      }


      
        bool RJSType_RDocumentVariables::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_REllipseEntity::id = -1;

      int RJSType_REllipseEntity::getId() const {
          return RJSType_REllipseEntity::getIdStatic();
      }

      int RJSType_REllipseEntity::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_REllipseEntity());
          }
          return id;
      }


      
        bool RJSType_REllipseEntity::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RFaceEntity::id = -1;

      int RJSType_RFaceEntity::getId() const {
          return RJSType_RFaceEntity::getIdStatic();
      }

      int RJSType_RFaceEntity::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RFaceEntity());
          }
          return id;
      }


      
        bool RJSType_RFaceEntity::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RHatchEntity::id = -1;

      int RJSType_RHatchEntity::getId() const {
          return RJSType_RHatchEntity::getIdStatic();
      }

      int RJSType_RHatchEntity::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RHatchEntity());
          }
          return id;
      }


      
        bool RJSType_RHatchEntity::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RImageEntity::id = -1;

      int RJSType_RImageEntity::getId() const {
          return RJSType_RImageEntity::getIdStatic();
      }

      int RJSType_RImageEntity::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RImageEntity());
          }
          return id;
      }


      
        bool RJSType_RImageEntity::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RLayer::id = -1;

      int RJSType_RLayer::getId() const {
          return RJSType_RLayer::getIdStatic();
      }

      int RJSType_RLayer::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RLayer());
          }
          return id;
      }


      
        bool RJSType_RLayer::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RLayerState::id = -1;

      int RJSType_RLayerState::getId() const {
          return RJSType_RLayerState::getIdStatic();
      }

      int RJSType_RLayerState::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RLayerState());
          }
          return id;
      }


      
        bool RJSType_RLayerState::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RLayout::id = -1;

      int RJSType_RLayout::getId() const {
          return RJSType_RLayout::getIdStatic();
      }

      int RJSType_RLayout::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RLayout());
          }
          return id;
      }


      
        bool RJSType_RLayout::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RLeaderEntity::id = -1;

      int RJSType_RLeaderEntity::getId() const {
          return RJSType_RLeaderEntity::getIdStatic();
      }

      int RJSType_RLeaderEntity::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RLeaderEntity());
          }
          return id;
      }


      
        bool RJSType_RLeaderEntity::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RLineEntity::id = -1;

      int RJSType_RLineEntity::getId() const {
          return RJSType_RLineEntity::getIdStatic();
      }

      int RJSType_RLineEntity::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RLineEntity());
          }
          return id;
      }


      
        bool RJSType_RLineEntity::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RLinetype::id = -1;

      int RJSType_RLinetype::getId() const {
          return RJSType_RLinetype::getIdStatic();
      }

      int RJSType_RLinetype::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RLinetype());
          }
          return id;
      }


      
        bool RJSType_RLinetype::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RPointEntity::id = -1;

      int RJSType_RPointEntity::getId() const {
          return RJSType_RPointEntity::getIdStatic();
      }

      int RJSType_RPointEntity::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RPointEntity());
          }
          return id;
      }


      
        bool RJSType_RPointEntity::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RPolyline::id = -1;

      int RJSType_RPolyline::getId() const {
          return RJSType_RPolyline::getIdStatic();
      }

      int RJSType_RPolyline::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RPolyline());
          }
          return id;
      }


      
        bool RJSType_RPolyline::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
                RJSType_RLeaderData::getIdStatic()
                ,
                RJSType_RPolylineData::getIdStatic()
                ,
                RJSType_RSolidData::getIdStatic()
                
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RPolylineEntity::id = -1;

      int RJSType_RPolylineEntity::getId() const {
          return RJSType_RPolylineEntity::getIdStatic();
      }

      int RJSType_RPolylineEntity::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RPolylineEntity());
          }
          return id;
      }


      
        bool RJSType_RPolylineEntity::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RRayEntity::id = -1;

      int RJSType_RRayEntity::getId() const {
          return RJSType_RRayEntity::getIdStatic();
      }

      int RJSType_RRayEntity::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RRayEntity());
          }
          return id;
      }


      
        bool RJSType_RRayEntity::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RSolidEntity::id = -1;

      int RJSType_RSolidEntity::getId() const {
          return RJSType_RSolidEntity::getIdStatic();
      }

      int RJSType_RSolidEntity::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RSolidEntity());
          }
          return id;
      }


      
        bool RJSType_RSolidEntity::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RSplineEntity::id = -1;

      int RJSType_RSplineEntity::getId() const {
          return RJSType_RSplineEntity::getIdStatic();
      }

      int RJSType_RSplineEntity::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RSplineEntity());
          }
          return id;
      }


      
        bool RJSType_RSplineEntity::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RTextEntity::id = -1;

      int RJSType_RTextEntity::getId() const {
          return RJSType_RTextEntity::getIdStatic();
      }

      int RJSType_RTextEntity::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RTextEntity());
          }
          return id;
      }


      
        bool RJSType_RTextEntity::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RTextBasedEntity::id = -1;

      int RJSType_RTextBasedEntity::getId() const {
          return RJSType_RTextBasedEntity::getIdStatic();
      }

      int RJSType_RTextBasedEntity::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RTextBasedEntity());
          }
          return id;
      }


      
        bool RJSType_RTextBasedEntity::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
                RJSType_RAttributeDefinitionEntity::getIdStatic()
                ,
                RJSType_RAttributeEntity::getIdStatic()
                ,
                RJSType_RTextEntity::getIdStatic()
                
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RToleranceEntity::id = -1;

      int RJSType_RToleranceEntity::getId() const {
          return RJSType_RToleranceEntity::getIdStatic();
      }

      int RJSType_RToleranceEntity::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RToleranceEntity());
          }
          return id;
      }


      
        bool RJSType_RToleranceEntity::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RTraceEntity::id = -1;

      int RJSType_RTraceEntity::getId() const {
          return RJSType_RTraceEntity::getIdStatic();
      }

      int RJSType_RTraceEntity::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RTraceEntity());
          }
          return id;
      }


      
        bool RJSType_RTraceEntity::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RUcs::id = -1;

      int RJSType_RUcs::getId() const {
          return RJSType_RUcs::getIdStatic();
      }

      int RJSType_RUcs::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RUcs());
          }
          return id;
      }


      
        bool RJSType_RUcs::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RView::id = -1;

      int RJSType_RView::getId() const {
          return RJSType_RView::getIdStatic();
      }

      int RJSType_RView::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RView());
          }
          return id;
      }


      
        bool RJSType_RView::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RViewportEntity::id = -1;

      int RJSType_RViewportEntity::getId() const {
          return RJSType_RViewportEntity::getIdStatic();
      }

      int RJSType_RViewportEntity::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RViewportEntity());
          }
          return id;
      }


      
        bool RJSType_RViewportEntity::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RWipeoutEntity::id = -1;

      int RJSType_RWipeoutEntity::getId() const {
          return RJSType_RWipeoutEntity::getIdStatic();
      }

      int RJSType_RWipeoutEntity::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RWipeoutEntity());
          }
          return id;
      }


      
        bool RJSType_RWipeoutEntity::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RXLineEntity::id = -1;

      int RJSType_RXLineEntity::getId() const {
          return RJSType_RXLineEntity::getIdStatic();
      }

      int RJSType_RXLineEntity::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RXLineEntity());
          }
          return id;
      }


      
        bool RJSType_RXLineEntity::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      

  
      int RJSType_RArcData::id = -1;

      int RJSType_RArcData::getId() const {
          return RJSType_RArcData::getIdStatic();
      }

      int RJSType_RArcData::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RArcData());
          }
          return id;
      }


      
        bool RJSType_RArcData::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RAttributeData::id = -1;

      int RJSType_RAttributeData::getId() const {
          return RJSType_RAttributeData::getIdStatic();
      }

      int RJSType_RAttributeData::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RAttributeData());
          }
          return id;
      }


      
        bool RJSType_RAttributeData::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RAttributeDefinitionData::id = -1;

      int RJSType_RAttributeDefinitionData::getId() const {
          return RJSType_RAttributeDefinitionData::getIdStatic();
      }

      int RJSType_RAttributeDefinitionData::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RAttributeDefinitionData());
          }
          return id;
      }


      
        bool RJSType_RAttributeDefinitionData::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RAutoLoadJs::id = -1;

      int RJSType_RAutoLoadJs::getId() const {
          return RJSType_RAutoLoadJs::getIdStatic();
      }

      int RJSType_RAutoLoadJs::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RAutoLoadJs());
          }
          return id;
      }


      
        bool RJSType_RAutoLoadJs::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RBlockReferenceData::id = -1;

      int RJSType_RBlockReferenceData::getId() const {
          return RJSType_RBlockReferenceData::getIdStatic();
      }

      int RJSType_RBlockReferenceData::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RBlockReferenceData());
          }
          return id;
      }


      
        bool RJSType_RBlockReferenceData::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RBox::id = -1;

      int RJSType_RBox::getId() const {
          return RJSType_RBox::getIdStatic();
      }

      int RJSType_RBox::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RBox());
          }
          return id;
      }


      
        bool RJSType_RBox::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RCircleData::id = -1;

      int RJSType_RCircleData::getId() const {
          return RJSType_RCircleData::getIdStatic();
      }

      int RJSType_RCircleData::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RCircleData());
          }
          return id;
      }


      
        bool RJSType_RCircleData::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RColor::id = -1;

      int RJSType_RColor::getId() const {
          return RJSType_RColor::getIdStatic();
      }

      int RJSType_RColor::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RColor());
          }
          return id;
      }


      
        bool RJSType_RColor::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RDebug::id = -1;

      int RJSType_RDebug::getId() const {
          return RJSType_RDebug::getIdStatic();
      }

      int RJSType_RDebug::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RDebug());
          }
          return id;
      }


      
        bool RJSType_RDebug::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RDimAlignedData::id = -1;

      int RJSType_RDimAlignedData::getId() const {
          return RJSType_RDimAlignedData::getIdStatic();
      }

      int RJSType_RDimAlignedData::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RDimAlignedData());
          }
          return id;
      }


      
        bool RJSType_RDimAlignedData::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RDimAngular2LData::id = -1;

      int RJSType_RDimAngular2LData::getId() const {
          return RJSType_RDimAngular2LData::getIdStatic();
      }

      int RJSType_RDimAngular2LData::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RDimAngular2LData());
          }
          return id;
      }


      
        bool RJSType_RDimAngular2LData::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RDimAngular3PData::id = -1;

      int RJSType_RDimAngular3PData::getId() const {
          return RJSType_RDimAngular3PData::getIdStatic();
      }

      int RJSType_RDimAngular3PData::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RDimAngular3PData());
          }
          return id;
      }


      
        bool RJSType_RDimAngular3PData::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RDimArcLengthData::id = -1;

      int RJSType_RDimArcLengthData::getId() const {
          return RJSType_RDimArcLengthData::getIdStatic();
      }

      int RJSType_RDimArcLengthData::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RDimArcLengthData());
          }
          return id;
      }


      
        bool RJSType_RDimArcLengthData::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RDimDiametricData::id = -1;

      int RJSType_RDimDiametricData::getId() const {
          return RJSType_RDimDiametricData::getIdStatic();
      }

      int RJSType_RDimDiametricData::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RDimDiametricData());
          }
          return id;
      }


      
        bool RJSType_RDimDiametricData::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RDimOrdinateData::id = -1;

      int RJSType_RDimOrdinateData::getId() const {
          return RJSType_RDimOrdinateData::getIdStatic();
      }

      int RJSType_RDimOrdinateData::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RDimOrdinateData());
          }
          return id;
      }


      
        bool RJSType_RDimOrdinateData::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RDimRadialData::id = -1;

      int RJSType_RDimRadialData::getId() const {
          return RJSType_RDimRadialData::getIdStatic();
      }

      int RJSType_RDimRadialData::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RDimRadialData());
          }
          return id;
      }


      
        bool RJSType_RDimRadialData::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RDimRotatedData::id = -1;

      int RJSType_RDimRotatedData::getId() const {
          return RJSType_RDimRotatedData::getIdStatic();
      }

      int RJSType_RDimRotatedData::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RDimRotatedData());
          }
          return id;
      }


      
        bool RJSType_RDimRotatedData::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RDimStyleData::id = -1;

      int RJSType_RDimStyleData::getId() const {
          return RJSType_RDimStyleData::getIdStatic();
      }

      int RJSType_RDimStyleData::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RDimStyleData());
          }
          return id;
      }


      
        bool RJSType_RDimStyleData::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
                RJSType_RDimStyle::getIdStatic()
                
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RDxfServices::id = -1;

      int RJSType_RDxfServices::getId() const {
          return RJSType_RDxfServices::getIdStatic();
      }

      int RJSType_RDxfServices::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RDxfServices());
          }
          return id;
      }


      
        bool RJSType_RDxfServices::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_REllipseData::id = -1;

      int RJSType_REllipseData::getId() const {
          return RJSType_REllipseData::getIdStatic();
      }

      int RJSType_REllipseData::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_REllipseData());
          }
          return id;
      }


      
        bool RJSType_REllipseData::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RFaceData::id = -1;

      int RJSType_RFaceData::getId() const {
          return RJSType_RFaceData::getIdStatic();
      }

      int RJSType_RFaceData::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RFaceData());
          }
          return id;
      }


      
        bool RJSType_RFaceData::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RFileCache::id = -1;

      int RJSType_RFileCache::getId() const {
          return RJSType_RFileCache::getIdStatic();
      }

      int RJSType_RFileCache::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RFileCache());
          }
          return id;
      }


      
        bool RJSType_RFileCache::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RFileExporterAdapter::id = -1;

      int RJSType_RFileExporterAdapter::getId() const {
          return RJSType_RFileExporterAdapter::getIdStatic();
      }

      int RJSType_RFileExporterAdapter::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RFileExporterAdapter());
          }
          return id;
      }


      
        bool RJSType_RFileExporterAdapter::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RFileExporterFactoryAdapter::id = -1;

      int RJSType_RFileExporterFactoryAdapter::getId() const {
          return RJSType_RFileExporterFactoryAdapter::getIdStatic();
      }

      int RJSType_RFileExporterFactoryAdapter::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RFileExporterFactoryAdapter());
          }
          return id;
      }


      
        bool RJSType_RFileExporterFactoryAdapter::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RFileExporterRegistry::id = -1;

      int RJSType_RFileExporterRegistry::getId() const {
          return RJSType_RFileExporterRegistry::getIdStatic();
      }

      int RJSType_RFileExporterRegistry::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RFileExporterRegistry());
          }
          return id;
      }


      
        bool RJSType_RFileExporterRegistry::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RFileImporterAdapter::id = -1;

      int RJSType_RFileImporterAdapter::getId() const {
          return RJSType_RFileImporterAdapter::getIdStatic();
      }

      int RJSType_RFileImporterAdapter::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RFileImporterAdapter());
          }
          return id;
      }


      
        bool RJSType_RFileImporterAdapter::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RFileImporterFactoryAdapter::id = -1;

      int RJSType_RFileImporterFactoryAdapter::getId() const {
          return RJSType_RFileImporterFactoryAdapter::getIdStatic();
      }

      int RJSType_RFileImporterFactoryAdapter::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RFileImporterFactoryAdapter());
          }
          return id;
      }


      
        bool RJSType_RFileImporterFactoryAdapter::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RFileImporterRegistry::id = -1;

      int RJSType_RFileImporterRegistry::getId() const {
          return RJSType_RFileImporterRegistry::getIdStatic();
      }

      int RJSType_RFileImporterRegistry::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RFileImporterRegistry());
          }
          return id;
      }


      
        bool RJSType_RFileImporterRegistry::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RFont::id = -1;

      int RJSType_RFont::getId() const {
          return RJSType_RFont::getIdStatic();
      }

      int RJSType_RFont::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RFont());
          }
          return id;
      }


      
        bool RJSType_RFont::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RFontList::id = -1;

      int RJSType_RFontList::getId() const {
          return RJSType_RFontList::getIdStatic();
      }

      int RJSType_RFontList::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RFontList());
          }
          return id;
      }


      
        bool RJSType_RFontList::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RGraphicsSceneDrawable::id = -1;

      int RJSType_RGraphicsSceneDrawable::getId() const {
          return RJSType_RGraphicsSceneDrawable::getIdStatic();
      }

      int RJSType_RGraphicsSceneDrawable::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RGraphicsSceneDrawable());
          }
          return id;
      }


      
        bool RJSType_RGraphicsSceneDrawable::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RHatchData::id = -1;

      int RJSType_RHatchData::getId() const {
          return RJSType_RHatchData::getIdStatic();
      }

      int RJSType_RHatchData::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RHatchData());
          }
          return id;
      }


      
        bool RJSType_RHatchData::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RImageData::id = -1;

      int RJSType_RImageData::getId() const {
          return RJSType_RImageData::getIdStatic();
      }

      int RJSType_RImageData::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RImageData());
          }
          return id;
      }


      
        bool RJSType_RImageData::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RLeaderData::id = -1;

      int RJSType_RLeaderData::getId() const {
          return RJSType_RLeaderData::getIdStatic();
      }

      int RJSType_RLeaderData::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RLeaderData());
          }
          return id;
      }


      
        bool RJSType_RLeaderData::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RLineData::id = -1;

      int RJSType_RLineData::getId() const {
          return RJSType_RLineData::getIdStatic();
      }

      int RJSType_RLineData::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RLineData());
          }
          return id;
      }


      
        bool RJSType_RLineData::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RLinetypePattern::id = -1;

      int RJSType_RLinetypePattern::getId() const {
          return RJSType_RLinetypePattern::getIdStatic();
      }

      int RJSType_RLinetypePattern::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RLinetypePattern());
          }
          return id;
      }


      
        bool RJSType_RLinetypePattern::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RLineweight::id = -1;

      int RJSType_RLineweight::getId() const {
          return RJSType_RLineweight::getIdStatic();
      }

      int RJSType_RLineweight::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RLineweight());
          }
          return id;
      }


      
        bool RJSType_RLineweight::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RMath::id = -1;

      int RJSType_RMath::getId() const {
          return RJSType_RMath::getIdStatic();
      }

      int RJSType_RMath::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RMath());
          }
          return id;
      }


      
        bool RJSType_RMath::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RMatrix::id = -1;

      int RJSType_RMatrix::getId() const {
          return RJSType_RMatrix::getIdStatic();
      }

      int RJSType_RMatrix::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RMatrix());
          }
          return id;
      }


      
        bool RJSType_RMatrix::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RPainterPath::id = -1;

      int RJSType_RPainterPath::getId() const {
          return RJSType_RPainterPath::getIdStatic();
      }

      int RJSType_RPainterPath::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RPainterPath());
          }
          return id;
      }


      
        bool RJSType_RPainterPath::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RPattern::id = -1;

      int RJSType_RPattern::getId() const {
          return RJSType_RPattern::getIdStatic();
      }

      int RJSType_RPattern::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RPattern());
          }
          return id;
      }


      
        bool RJSType_RPattern::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RPatternLine::id = -1;

      int RJSType_RPatternLine::getId() const {
          return RJSType_RPatternLine::getIdStatic();
      }

      int RJSType_RPatternLine::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RPatternLine());
          }
          return id;
      }


      
        bool RJSType_RPatternLine::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RPatternList::id = -1;

      int RJSType_RPatternList::getId() const {
          return RJSType_RPatternList::getIdStatic();
      }

      int RJSType_RPatternList::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RPatternList());
          }
          return id;
      }


      
        bool RJSType_RPatternList::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
                RJSType_RPatternListImperial::getIdStatic()
                ,
                RJSType_RPatternListMetric::getIdStatic()
                
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RPatternListImperial::id = -1;

      int RJSType_RPatternListImperial::getId() const {
          return RJSType_RPatternListImperial::getIdStatic();
      }

      int RJSType_RPatternListImperial::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RPatternListImperial());
          }
          return id;
      }


      
        bool RJSType_RPatternListImperial::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RPatternListMetric::id = -1;

      int RJSType_RPatternListMetric::getId() const {
          return RJSType_RPatternListMetric::getIdStatic();
      }

      int RJSType_RPatternListMetric::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RPatternListMetric());
          }
          return id;
      }


      
        bool RJSType_RPatternListMetric::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RPluginInfo::id = -1;

      int RJSType_RPluginInfo::getId() const {
          return RJSType_RPluginInfo::getIdStatic();
      }

      int RJSType_RPluginInfo::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RPluginInfo());
          }
          return id;
      }


      
        bool RJSType_RPluginInfo::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RPluginLoader::id = -1;

      int RJSType_RPluginLoader::getId() const {
          return RJSType_RPluginLoader::getIdStatic();
      }

      int RJSType_RPluginLoader::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RPluginLoader());
          }
          return id;
      }


      
        bool RJSType_RPluginLoader::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RPointData::id = -1;

      int RJSType_RPointData::getId() const {
          return RJSType_RPointData::getIdStatic();
      }

      int RJSType_RPointData::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RPointData());
          }
          return id;
      }


      
        bool RJSType_RPointData::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RPolylineData::id = -1;

      int RJSType_RPolylineData::getId() const {
          return RJSType_RPolylineData::getIdStatic();
      }

      int RJSType_RPolylineData::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RPolylineData());
          }
          return id;
      }


      
        bool RJSType_RPolylineData::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
                RJSType_RWipeoutData::getIdStatic()
                
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RPropertyAttributes::id = -1;

      int RJSType_RPropertyAttributes::getId() const {
          return RJSType_RPropertyAttributes::getIdStatic();
      }

      int RJSType_RPropertyAttributes::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RPropertyAttributes());
          }
          return id;
      }


      
        bool RJSType_RPropertyAttributes::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RPropertyChange::id = -1;

      int RJSType_RPropertyChange::getId() const {
          return RJSType_RPropertyChange::getIdStatic();
      }

      int RJSType_RPropertyChange::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RPropertyChange());
          }
          return id;
      }


      
        bool RJSType_RPropertyChange::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RPropertyTypeId::id = -1;

      int RJSType_RPropertyTypeId::getId() const {
          return RJSType_RPropertyTypeId::getIdStatic();
      }

      int RJSType_RPropertyTypeId::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RPropertyTypeId());
          }
          return id;
      }


      
        bool RJSType_RPropertyTypeId::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RRayData::id = -1;

      int RJSType_RRayData::getId() const {
          return RJSType_RRayData::getIdStatic();
      }

      int RJSType_RRayData::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RRayData());
          }
          return id;
      }


      
        bool RJSType_RRayData::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RRefPoint::id = -1;

      int RJSType_RRefPoint::getId() const {
          return RJSType_RRefPoint::getIdStatic();
      }

      int RJSType_RRefPoint::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RRefPoint());
          }
          return id;
      }


      
        bool RJSType_RRefPoint::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RS::id = -1;

      int RJSType_RS::getId() const {
          return RJSType_RS::getIdStatic();
      }

      int RJSType_RS::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RS());
          }
          return id;
      }


      
        bool RJSType_RS::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RSettings::id = -1;

      int RJSType_RSettings::getId() const {
          return RJSType_RSettings::getIdStatic();
      }

      int RJSType_RSettings::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RSettings());
          }
          return id;
      }


      
        bool RJSType_RSettings::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RSolidData::id = -1;

      int RJSType_RSolidData::getId() const {
          return RJSType_RSolidData::getIdStatic();
      }

      int RJSType_RSolidData::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RSolidData());
          }
          return id;
      }


      
        bool RJSType_RSolidData::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
                RJSType_RFaceData::getIdStatic()
                ,
                RJSType_RTraceData::getIdStatic()
                
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RSpatialIndexNavel::id = -1;

      int RJSType_RSpatialIndexNavel::getId() const {
          return RJSType_RSpatialIndexNavel::getIdStatic();
      }

      int RJSType_RSpatialIndexNavel::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RSpatialIndexNavel());
          }
          return id;
      }


      
        bool RJSType_RSpatialIndexNavel::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RSpatialIndexVisitorAdapter::id = -1;

      int RJSType_RSpatialIndexVisitorAdapter::getId() const {
          return RJSType_RSpatialIndexVisitorAdapter::getIdStatic();
      }

      int RJSType_RSpatialIndexVisitorAdapter::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RSpatialIndexVisitorAdapter());
          }
          return id;
      }


      
        bool RJSType_RSpatialIndexVisitorAdapter::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RSplineData::id = -1;

      int RJSType_RSplineData::getId() const {
          return RJSType_RSplineData::getIdStatic();
      }

      int RJSType_RSplineData::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RSplineData());
          }
          return id;
      }


      
        bool RJSType_RSplineData::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RStemmer::id = -1;

      int RJSType_RStemmer::getId() const {
          return RJSType_RStemmer::getIdStatic();
      }

      int RJSType_RStemmer::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RStemmer());
          }
          return id;
      }


      
        bool RJSType_RStemmer::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RTextBasedData::id = -1;

      int RJSType_RTextBasedData::getId() const {
          return RJSType_RTextBasedData::getIdStatic();
      }

      int RJSType_RTextBasedData::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RTextBasedData());
          }
          return id;
      }


      
        bool RJSType_RTextBasedData::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
                RJSType_RAttributeData::getIdStatic()
                ,
                RJSType_RAttributeDefinitionData::getIdStatic()
                ,
                RJSType_RTextData::getIdStatic()
                
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RTextData::id = -1;

      int RJSType_RTextData::getId() const {
          return RJSType_RTextData::getIdStatic();
      }

      int RJSType_RTextData::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RTextData());
          }
          return id;
      }


      
        bool RJSType_RTextData::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RTextLayout::id = -1;

      int RJSType_RTextLayout::getId() const {
          return RJSType_RTextLayout::getIdStatic();
      }

      int RJSType_RTextLayout::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RTextLayout());
          }
          return id;
      }


      
        bool RJSType_RTextLayout::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RToleranceData::id = -1;

      int RJSType_RToleranceData::getId() const {
          return RJSType_RToleranceData::getIdStatic();
      }

      int RJSType_RToleranceData::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RToleranceData());
          }
          return id;
      }


      
        bool RJSType_RToleranceData::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RTraceData::id = -1;

      int RJSType_RTraceData::getId() const {
          return RJSType_RTraceData::getIdStatic();
      }

      int RJSType_RTraceData::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RTraceData());
          }
          return id;
      }


      
        bool RJSType_RTraceData::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RTransaction::id = -1;

      int RJSType_RTransaction::getId() const {
          return RJSType_RTransaction::getIdStatic();
      }

      int RJSType_RTransaction::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RTransaction());
          }
          return id;
      }


      
        bool RJSType_RTransaction::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RTransform::id = -1;

      int RJSType_RTransform::getId() const {
          return RJSType_RTransform::getIdStatic();
      }

      int RJSType_RTransform::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RTransform());
          }
          return id;
      }


      
        bool RJSType_RTransform::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RTransformOp::id = -1;

      int RJSType_RTransformOp::getId() const {
          return RJSType_RTransformOp::getIdStatic();
      }

      int RJSType_RTransformOp::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RTransformOp());
          }
          return id;
      }


      
        bool RJSType_RTransformOp::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RUnit::id = -1;

      int RJSType_RUnit::getId() const {
          return RJSType_RUnit::getIdStatic();
      }

      int RJSType_RUnit::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RUnit());
          }
          return id;
      }


      
        bool RJSType_RUnit::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RViewFocusListenerAdapter::id = -1;

      int RJSType_RViewFocusListenerAdapter::getId() const {
          return RJSType_RViewFocusListenerAdapter::getIdStatic();
      }

      int RJSType_RViewFocusListenerAdapter::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RViewFocusListenerAdapter());
          }
          return id;
      }


      
        bool RJSType_RViewFocusListenerAdapter::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RViewportData::id = -1;

      int RJSType_RViewportData::getId() const {
          return RJSType_RViewportData::getIdStatic();
      }

      int RJSType_RViewportData::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RViewportData());
          }
          return id;
      }


      
        bool RJSType_RViewportData::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RWipeoutData::id = -1;

      int RJSType_RWipeoutData::getId() const {
          return RJSType_RWipeoutData::getIdStatic();
      }

      int RJSType_RWipeoutData::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RWipeoutData());
          }
          return id;
      }


      
        bool RJSType_RWipeoutData::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RXLineData::id = -1;

      int RJSType_RXLineData::getId() const {
          return RJSType_RXLineData::getIdStatic();
      }

      int RJSType_RXLineData::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RXLineData());
          }
          return id;
      }


      
        bool RJSType_RXLineData::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RVector::id = -1;

      int RJSType_RVector::getId() const {
          return RJSType_RVector::getIdStatic();
      }

      int RJSType_RVector::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RVector());
          }
          return id;
      }


      
        bool RJSType_RVector::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
                RJSType_RRefPoint::getIdStatic()
                
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      

  
      int RJSType_RPainterPathSource::id = -1;

      int RJSType_RPainterPathSource::getId() const {
          return RJSType_RPainterPathSource::getIdStatic();
      }

      int RJSType_RPainterPathSource::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RPainterPathSource());
          }
          return id;
      }


      
        bool RJSType_RPainterPathSource::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
                RJSType_RTextBasedData::getIdStatic()
                
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RAction::id = -1;

      int RJSType_RAction::getId() const {
          return RJSType_RAction::getIdStatic();
      }

      int RJSType_RAction::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RAction());
          }
          return id;
      }


      
        bool RJSType_RAction::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
                RJSType_RActionAdapter::getIdStatic()
                
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RActionAdapter::id = -1;

      int RJSType_RActionAdapter::getId() const {
          return RJSType_RActionAdapter::getIdStatic();
      }

      int RJSType_RActionAdapter::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RActionAdapter());
          }
          return id;
      }


      
        bool RJSType_RActionAdapter::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RAddObjectOperation::id = -1;

      int RJSType_RAddObjectOperation::getId() const {
          return RJSType_RAddObjectOperation::getIdStatic();
      }

      int RJSType_RAddObjectOperation::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RAddObjectOperation());
          }
          return id;
      }


      
        bool RJSType_RAddObjectOperation::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
                RJSType_RModifyObjectOperation::getIdStatic()
                
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RAddObjectsOperation::id = -1;

      int RJSType_RAddObjectsOperation::getId() const {
          return RJSType_RAddObjectsOperation::getIdStatic();
      }

      int RJSType_RAddObjectsOperation::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RAddObjectsOperation());
          }
          return id;
      }


      
        bool RJSType_RAddObjectsOperation::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
                RJSType_RAddObjectOperation::getIdStatic()
                ,
                RJSType_RModifyObjectsOperation::getIdStatic()
                
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RBlockListener::id = -1;

      int RJSType_RBlockListener::getId() const {
          return RJSType_RBlockListener::getIdStatic();
      }

      int RJSType_RBlockListener::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RBlockListener());
          }
          return id;
      }


      
        bool RJSType_RBlockListener::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
                RJSType_RBlockListenerAdapter::getIdStatic()
                
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RChangePropertyOperation::id = -1;

      int RJSType_RChangePropertyOperation::getId() const {
          return RJSType_RChangePropertyOperation::getIdStatic();
      }

      int RJSType_RChangePropertyOperation::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RChangePropertyOperation());
          }
          return id;
      }


      
        bool RJSType_RChangePropertyOperation::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RClickReferencePointOperation::id = -1;

      int RJSType_RClickReferencePointOperation::getId() const {
          return RJSType_RClickReferencePointOperation::getIdStatic();
      }

      int RJSType_RClickReferencePointOperation::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RClickReferencePointOperation());
          }
          return id;
      }


      
        bool RJSType_RClickReferencePointOperation::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RClipboardOperation::id = -1;

      int RJSType_RClipboardOperation::getId() const {
          return RJSType_RClipboardOperation::getIdStatic();
      }

      int RJSType_RClipboardOperation::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RClipboardOperation());
          }
          return id;
      }


      
        bool RJSType_RClipboardOperation::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
                RJSType_RCopyOperation::getIdStatic()
                ,
                RJSType_RDeleteSelectionOperation::getIdStatic()
                ,
                RJSType_RPasteOperation::getIdStatic()
                
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RCloseCurrentEvent::id = -1;

      int RJSType_RCloseCurrentEvent::getId() const {
          return RJSType_RCloseCurrentEvent::getIdStatic();
      }

      int RJSType_RCloseCurrentEvent::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RCloseCurrentEvent());
          }
          return id;
      }


      
        bool RJSType_RCloseCurrentEvent::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RCommandEvent::id = -1;

      int RJSType_RCommandEvent::getId() const {
          return RJSType_RCommandEvent::getIdStatic();
      }

      int RJSType_RCommandEvent::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RCommandEvent());
          }
          return id;
      }


      
        bool RJSType_RCommandEvent::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RCoordinateEvent::id = -1;

      int RJSType_RCoordinateEvent::getId() const {
          return RJSType_RCoordinateEvent::getIdStatic();
      }

      int RJSType_RCoordinateEvent::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RCoordinateEvent());
          }
          return id;
      }


      
        bool RJSType_RCoordinateEvent::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RCoordinateListener::id = -1;

      int RJSType_RCoordinateListener::getId() const {
          return RJSType_RCoordinateListener::getIdStatic();
      }

      int RJSType_RCoordinateListener::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RCoordinateListener());
          }
          return id;
      }


      
        bool RJSType_RCoordinateListener::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
                RJSType_RCoordinateListenerAdapter::getIdStatic()
                ,
                RJSType_RRulerQt::getIdStatic()
                
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RCopyOperation::id = -1;

      int RJSType_RCopyOperation::getId() const {
          return RJSType_RCopyOperation::getIdStatic();
      }

      int RJSType_RCopyOperation::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RCopyOperation());
          }
          return id;
      }


      
        bool RJSType_RCopyOperation::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RDeleteAllEntitiesOperation::id = -1;

      int RJSType_RDeleteAllEntitiesOperation::getId() const {
          return RJSType_RDeleteAllEntitiesOperation::getIdStatic();
      }

      int RJSType_RDeleteAllEntitiesOperation::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RDeleteAllEntitiesOperation());
          }
          return id;
      }


      
        bool RJSType_RDeleteAllEntitiesOperation::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RDeleteObjectOperation::id = -1;

      int RJSType_RDeleteObjectOperation::getId() const {
          return RJSType_RDeleteObjectOperation::getIdStatic();
      }

      int RJSType_RDeleteObjectOperation::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RDeleteObjectOperation());
          }
          return id;
      }


      
        bool RJSType_RDeleteObjectOperation::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RDeleteObjectsOperation::id = -1;

      int RJSType_RDeleteObjectsOperation::getId() const {
          return RJSType_RDeleteObjectsOperation::getIdStatic();
      }

      int RJSType_RDeleteObjectsOperation::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RDeleteObjectsOperation());
          }
          return id;
      }


      
        bool RJSType_RDeleteObjectsOperation::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
                RJSType_RDeleteObjectOperation::getIdStatic()
                
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RDeleteSelectionOperation::id = -1;

      int RJSType_RDeleteSelectionOperation::getId() const {
          return RJSType_RDeleteSelectionOperation::getIdStatic();
      }

      int RJSType_RDeleteSelectionOperation::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RDeleteSelectionOperation());
          }
          return id;
      }


      
        bool RJSType_RDeleteSelectionOperation::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RDimensionData::id = -1;

      int RJSType_RDimensionData::getId() const {
          return RJSType_RDimensionData::getIdStatic();
      }

      int RJSType_RDimensionData::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RDimensionData());
          }
          return id;
      }


      
        bool RJSType_RDimensionData::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
                RJSType_RDimAlignedData::getIdStatic()
                ,
                RJSType_RDimAngular2LData::getIdStatic()
                ,
                RJSType_RDimAngular3PData::getIdStatic()
                ,
                RJSType_RDimAngularData::getIdStatic()
                ,
                RJSType_RDimArcLengthData::getIdStatic()
                ,
                RJSType_RDimDiametricData::getIdStatic()
                ,
                RJSType_RDimLinearData::getIdStatic()
                ,
                RJSType_RDimOrdinateData::getIdStatic()
                ,
                RJSType_RDimRadialData::getIdStatic()
                ,
                RJSType_RDimRotatedData::getIdStatic()
                
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RDimLinearData::id = -1;

      int RJSType_RDimLinearData::getId() const {
          return RJSType_RDimLinearData::getIdStatic();
      }

      int RJSType_RDimLinearData::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RDimLinearData());
          }
          return id;
      }


      
        bool RJSType_RDimLinearData::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
                RJSType_RDimAlignedData::getIdStatic()
                ,
                RJSType_RDimRotatedData::getIdStatic()
                
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RDirected::id = -1;

      int RJSType_RDirected::getId() const {
          return RJSType_RDirected::getIdStatic();
      }

      int RJSType_RDirected::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RDirected());
          }
          return id;
      }


      
        bool RJSType_RDirected::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RDocument::id = -1;

      int RJSType_RDocument::getId() const {
          return RJSType_RDocument::getIdStatic();
      }

      int RJSType_RDocument::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RDocument());
          }
          return id;
      }


      
        bool RJSType_RDocument::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RDocumentInterface::id = -1;

      int RJSType_RDocumentInterface::getId() const {
          return RJSType_RDocumentInterface::getIdStatic();
      }

      int RJSType_RDocumentInterface::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RDocumentInterface());
          }
          return id;
      }


      
        bool RJSType_RDocumentInterface::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_REntityData::id = -1;

      int RJSType_REntityData::getId() const {
          return RJSType_REntityData::getIdStatic();
      }

      int RJSType_REntityData::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_REntityData());
          }
          return id;
      }


      
        bool RJSType_REntityData::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
                RJSType_RArcData::getIdStatic()
                ,
                RJSType_RAttributeData::getIdStatic()
                ,
                RJSType_RBlockReferenceData::getIdStatic()
                ,
                RJSType_RCircleData::getIdStatic()
                ,
                RJSType_RDimAlignedData::getIdStatic()
                ,
                RJSType_RDimAngular2LData::getIdStatic()
                ,
                RJSType_RDimAngular3PData::getIdStatic()
                ,
                RJSType_RDimAngularData::getIdStatic()
                ,
                RJSType_RDimArcLengthData::getIdStatic()
                ,
                RJSType_RDimDiametricData::getIdStatic()
                ,
                RJSType_RDimensionData::getIdStatic()
                ,
                RJSType_RDimLinearData::getIdStatic()
                ,
                RJSType_RDimOrdinateData::getIdStatic()
                ,
                RJSType_RDimRadialData::getIdStatic()
                ,
                RJSType_RDimRotatedData::getIdStatic()
                ,
                RJSType_REllipseData::getIdStatic()
                ,
                RJSType_RHatchData::getIdStatic()
                ,
                RJSType_RImageData::getIdStatic()
                ,
                RJSType_RLeaderData::getIdStatic()
                ,
                RJSType_RLineData::getIdStatic()
                ,
                RJSType_RPointData::getIdStatic()
                ,
                RJSType_RPolylineData::getIdStatic()
                ,
                RJSType_RRayData::getIdStatic()
                ,
                RJSType_RSolidData::getIdStatic()
                ,
                RJSType_RSplineData::getIdStatic()
                ,
                RJSType_RTextBasedData::getIdStatic()
                ,
                RJSType_RTextData::getIdStatic()
                ,
                RJSType_RToleranceData::getIdStatic()
                ,
                RJSType_RViewportData::getIdStatic()
                ,
                RJSType_RWipeoutData::getIdStatic()
                ,
                RJSType_RXLineData::getIdStatic()
                
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_REntityExportListener::id = -1;

      int RJSType_REntityExportListener::getId() const {
          return RJSType_REntityExportListener::getIdStatic();
      }

      int RJSType_REntityExportListener::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_REntityExportListener());
          }
          return id;
      }


      
        bool RJSType_REntityExportListener::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_REntityPickEvent::id = -1;

      int RJSType_REntityPickEvent::getId() const {
          return RJSType_REntityPickEvent::getIdStatic();
      }

      int RJSType_REntityPickEvent::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_REntityPickEvent());
          }
          return id;
      }


      
        bool RJSType_REntityPickEvent::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RExplodable::id = -1;

      int RJSType_RExplodable::getId() const {
          return RJSType_RExplodable::getIdStatic();
      }

      int RJSType_RExplodable::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RExplodable());
          }
          return id;
      }


      
        bool RJSType_RExplodable::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
                RJSType_RPolyline::getIdStatic()
                ,
                RJSType_RSpline::getIdStatic()
                ,
                RJSType_RTriangle::getIdStatic()
                
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RExportListener::id = -1;

      int RJSType_RExportListener::getId() const {
          return RJSType_RExportListener::getIdStatic();
      }

      int RJSType_RExportListener::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RExportListener());
          }
          return id;
      }


      
        bool RJSType_RExportListener::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
                RJSType_RExportListenerAdapter::getIdStatic()
                
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RExporter::id = -1;

      int RJSType_RExporter::getId() const {
          return RJSType_RExporter::getIdStatic();
      }

      int RJSType_RExporter::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RExporter());
          }
          return id;
      }


      
        bool RJSType_RExporter::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
                RJSType_RFileExporter::getIdStatic()
                ,
                RJSType_RFileExporterAdapter::getIdStatic()
                ,
                RJSType_RGraphicsScene::getIdStatic()
                ,
                RJSType_RGraphicsSceneQt::getIdStatic()
                
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RFileExporter::id = -1;

      int RJSType_RFileExporter::getId() const {
          return RJSType_RFileExporter::getIdStatic();
      }

      int RJSType_RFileExporter::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RFileExporter());
          }
          return id;
      }


      
        bool RJSType_RFileExporter::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
                RJSType_RFileExporterAdapter::getIdStatic()
                
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RFileExporterFactory::id = -1;

      int RJSType_RFileExporterFactory::getId() const {
          return RJSType_RFileExporterFactory::getIdStatic();
      }

      int RJSType_RFileExporterFactory::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RFileExporterFactory());
          }
          return id;
      }


      
        bool RJSType_RFileExporterFactory::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
                RJSType_RFileExporterFactoryAdapter::getIdStatic()
                
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RFileImporter::id = -1;

      int RJSType_RFileImporter::getId() const {
          return RJSType_RFileImporter::getIdStatic();
      }

      int RJSType_RFileImporter::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RFileImporter());
          }
          return id;
      }


      
        bool RJSType_RFileImporter::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
                RJSType_RFileImporterAdapter::getIdStatic()
                
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RFileImporterFactory::id = -1;

      int RJSType_RFileImporterFactory::getId() const {
          return RJSType_RFileImporterFactory::getIdStatic();
      }

      int RJSType_RFileImporterFactory::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RFileImporterFactory());
          }
          return id;
      }


      
        bool RJSType_RFileImporterFactory::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
                RJSType_RFileImporterFactoryAdapter::getIdStatic()
                
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RFocusListener::id = -1;

      int RJSType_RFocusListener::getId() const {
          return RJSType_RFocusListener::getIdStatic();
      }

      int RJSType_RFocusListener::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RFocusListener());
          }
          return id;
      }


      
        bool RJSType_RFocusListener::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
                RJSType_RFocusListenerAdapter::getIdStatic()
                ,
                RJSType_RGuiAction::getIdStatic()
                
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RGraphicsScene::id = -1;

      int RJSType_RGraphicsScene::getId() const {
          return RJSType_RGraphicsScene::getIdStatic();
      }

      int RJSType_RGraphicsScene::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RGraphicsScene());
          }
          return id;
      }


      
        bool RJSType_RGraphicsScene::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
                RJSType_RGraphicsSceneQt::getIdStatic()
                
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RGraphicsSceneQt::id = -1;

      int RJSType_RGraphicsSceneQt::getId() const {
          return RJSType_RGraphicsSceneQt::getIdStatic();
      }

      int RJSType_RGraphicsSceneQt::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RGraphicsSceneQt());
          }
          return id;
      }


      
        bool RJSType_RGraphicsSceneQt::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RGraphicsView::id = -1;

      int RJSType_RGraphicsView::getId() const {
          return RJSType_RGraphicsView::getIdStatic();
      }

      int RJSType_RGraphicsView::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RGraphicsView());
          }
          return id;
      }


      
        bool RJSType_RGraphicsView::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
                RJSType_RGraphicsViewImage::getIdStatic()
                
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RGrid::id = -1;

      int RJSType_RGrid::getId() const {
          return RJSType_RGrid::getIdStatic();
      }

      int RJSType_RGrid::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RGrid());
          }
          return id;
      }


      
        bool RJSType_RGrid::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
                RJSType_ROrthoGrid::getIdStatic()
                
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RImportListener::id = -1;

      int RJSType_RImportListener::getId() const {
          return RJSType_RImportListener::getIdStatic();
      }

      int RJSType_RImportListener::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RImportListener());
          }
          return id;
      }


      
        bool RJSType_RImportListener::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
                RJSType_RImportListenerAdapter::getIdStatic()
                
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RImporter::id = -1;

      int RJSType_RImporter::getId() const {
          return RJSType_RImporter::getIdStatic();
      }

      int RJSType_RImporter::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RImporter());
          }
          return id;
      }


      
        bool RJSType_RImporter::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
                RJSType_RFileImporter::getIdStatic()
                ,
                RJSType_RFileImporterAdapter::getIdStatic()
                
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RInputEvent::id = -1;

      int RJSType_RInputEvent::getId() const {
          return RJSType_RInputEvent::getIdStatic();
      }

      int RJSType_RInputEvent::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RInputEvent());
          }
          return id;
      }


      
        bool RJSType_RInputEvent::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
                RJSType_RCoordinateEvent::getIdStatic()
                ,
                RJSType_REntityPickEvent::getIdStatic()
                ,
                RJSType_RMouseEvent::getIdStatic()
                ,
                RJSType_RWheelEvent::getIdStatic()
                
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RInterTransactionListener::id = -1;

      int RJSType_RInterTransactionListener::getId() const {
          return RJSType_RInterTransactionListener::getIdStatic();
      }

      int RJSType_RInterTransactionListener::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RInterTransactionListener());
          }
          return id;
      }


      
        bool RJSType_RInterTransactionListener::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
                RJSType_RInterTransactionListenerAdapter::getIdStatic()
                
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RKeyListener::id = -1;

      int RJSType_RKeyListener::getId() const {
          return RJSType_RKeyListener::getIdStatic();
      }

      int RJSType_RKeyListener::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RKeyListener());
          }
          return id;
      }


      
        bool RJSType_RKeyListener::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
                RJSType_RKeyListenerAdapter::getIdStatic()
                
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RLayerListener::id = -1;

      int RJSType_RLayerListener::getId() const {
          return RJSType_RLayerListener::getIdStatic();
      }

      int RJSType_RLayerListener::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RLayerListener());
          }
          return id;
      }


      
        bool RJSType_RLayerListener::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
                RJSType_RLayerListenerAdapter::getIdStatic()
                ,
                RJSType_RPropertyEditor::getIdStatic()
                
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RMainWindow::id = -1;

      int RJSType_RMainWindow::getId() const {
          return RJSType_RMainWindow::getIdStatic();
      }

      int RJSType_RMainWindow::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RMainWindow());
          }
          return id;
      }


      
        bool RJSType_RMainWindow::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
                RJSType_RMainWindowQt::getIdStatic()
                
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RMemoryStorage::id = -1;

      int RJSType_RMemoryStorage::getId() const {
          return RJSType_RMemoryStorage::getIdStatic();
      }

      int RJSType_RMemoryStorage::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RMemoryStorage());
          }
          return id;
      }


      
        bool RJSType_RMemoryStorage::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RMessageHandler::id = -1;

      int RJSType_RMessageHandler::getId() const {
          return RJSType_RMessageHandler::getIdStatic();
      }

      int RJSType_RMessageHandler::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RMessageHandler());
          }
          return id;
      }


      
        bool RJSType_RMessageHandler::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RMixedOperation::id = -1;

      int RJSType_RMixedOperation::getId() const {
          return RJSType_RMixedOperation::getIdStatic();
      }

      int RJSType_RMixedOperation::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RMixedOperation());
          }
          return id;
      }


      
        bool RJSType_RMixedOperation::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RModifiedListener::id = -1;

      int RJSType_RModifiedListener::getId() const {
          return RJSType_RModifiedListener::getIdStatic();
      }

      int RJSType_RModifiedListener::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RModifiedListener());
          }
          return id;
      }


      
        bool RJSType_RModifiedListener::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
                RJSType_RMdiChildQt::getIdStatic()
                
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RModifyObjectOperation::id = -1;

      int RJSType_RModifyObjectOperation::getId() const {
          return RJSType_RModifyObjectOperation::getIdStatic();
      }

      int RJSType_RModifyObjectOperation::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RModifyObjectOperation());
          }
          return id;
      }


      
        bool RJSType_RModifyObjectOperation::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RModifyObjectsOperation::id = -1;

      int RJSType_RModifyObjectsOperation::getId() const {
          return RJSType_RModifyObjectsOperation::getIdStatic();
      }

      int RJSType_RModifyObjectsOperation::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RModifyObjectsOperation());
          }
          return id;
      }


      
        bool RJSType_RModifyObjectsOperation::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RMouseEvent::id = -1;

      int RJSType_RMouseEvent::getId() const {
          return RJSType_RMouseEvent::getIdStatic();
      }

      int RJSType_RMouseEvent::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RMouseEvent());
          }
          return id;
      }


      
        bool RJSType_RMouseEvent::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RMoveReferencePointOperation::id = -1;

      int RJSType_RMoveReferencePointOperation::getId() const {
          return RJSType_RMoveReferencePointOperation::getIdStatic();
      }

      int RJSType_RMoveReferencePointOperation::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RMoveReferencePointOperation());
          }
          return id;
      }


      
        bool RJSType_RMoveReferencePointOperation::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RMoveSelectionOperation::id = -1;

      int RJSType_RMoveSelectionOperation::getId() const {
          return RJSType_RMoveSelectionOperation::getIdStatic();
      }

      int RJSType_RMoveSelectionOperation::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RMoveSelectionOperation());
          }
          return id;
      }


      
        bool RJSType_RMoveSelectionOperation::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RNewDocumentListener::id = -1;

      int RJSType_RNewDocumentListener::getId() const {
          return RJSType_RNewDocumentListener::getIdStatic();
      }

      int RJSType_RNewDocumentListener::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RNewDocumentListener());
          }
          return id;
      }


      
        bool RJSType_RNewDocumentListener::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_ROperation::id = -1;

      int RJSType_ROperation::getId() const {
          return RJSType_ROperation::getIdStatic();
      }

      int RJSType_ROperation::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_ROperation());
          }
          return id;
      }


      
        bool RJSType_ROperation::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
                RJSType_RAddObjectOperation::getIdStatic()
                ,
                RJSType_RAddObjectsOperation::getIdStatic()
                ,
                RJSType_RChangePropertyOperation::getIdStatic()
                ,
                RJSType_RClickReferencePointOperation::getIdStatic()
                ,
                RJSType_RClipboardOperation::getIdStatic()
                ,
                RJSType_RCopyOperation::getIdStatic()
                ,
                RJSType_RDeleteAllEntitiesOperation::getIdStatic()
                ,
                RJSType_RDeleteObjectOperation::getIdStatic()
                ,
                RJSType_RDeleteObjectsOperation::getIdStatic()
                ,
                RJSType_RDeleteSelectionOperation::getIdStatic()
                ,
                RJSType_RMixedOperation::getIdStatic()
                ,
                RJSType_RModifyObjectOperation::getIdStatic()
                ,
                RJSType_RModifyObjectsOperation::getIdStatic()
                ,
                RJSType_RMoveReferencePointOperation::getIdStatic()
                ,
                RJSType_RMoveSelectionOperation::getIdStatic()
                ,
                RJSType_RPasteOperation::getIdStatic()
                ,
                RJSType_RScaleSelectionOperation::getIdStatic()
                
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_ROperationUtils::id = -1;

      int RJSType_ROperationUtils::getId() const {
          return RJSType_ROperationUtils::getIdStatic();
      }

      int RJSType_ROperationUtils::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_ROperationUtils());
          }
          return id;
      }


      
        bool RJSType_ROperationUtils::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_ROrthoGrid::id = -1;

      int RJSType_ROrthoGrid::getId() const {
          return RJSType_ROrthoGrid::getIdStatic();
      }

      int RJSType_ROrthoGrid::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_ROrthoGrid());
          }
          return id;
      }


      
        bool RJSType_ROrthoGrid::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RPaletteListener::id = -1;

      int RJSType_RPaletteListener::getId() const {
          return RJSType_RPaletteListener::getIdStatic();
      }

      int RJSType_RPaletteListener::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RPaletteListener());
          }
          return id;
      }


      
        bool RJSType_RPaletteListener::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
                RJSType_RPaletteListenerAdapter::getIdStatic()
                ,
                RJSType_RRulerQt::getIdStatic()
                
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RPasteOperation::id = -1;

      int RJSType_RPasteOperation::getId() const {
          return RJSType_RPasteOperation::getIdStatic();
      }

      int RJSType_RPasteOperation::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RPasteOperation());
          }
          return id;
      }


      
        bool RJSType_RPasteOperation::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RPenListener::id = -1;

      int RJSType_RPenListener::getId() const {
          return RJSType_RPenListener::getIdStatic();
      }

      int RJSType_RPenListener::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RPenListener());
          }
          return id;
      }


      
        bool RJSType_RPenListener::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
                RJSType_RPenListenerAdapter::getIdStatic()
                
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RPluginInterface::id = -1;

      int RJSType_RPluginInterface::getId() const {
          return RJSType_RPluginInterface::getIdStatic();
      }

      int RJSType_RPluginInterface::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RPluginInterface());
          }
          return id;
      }


      
        bool RJSType_RPluginInterface::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RPreferencesListener::id = -1;

      int RJSType_RPreferencesListener::getId() const {
          return RJSType_RPreferencesListener::getIdStatic();
      }

      int RJSType_RPreferencesListener::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RPreferencesListener());
          }
          return id;
      }


      
        bool RJSType_RPreferencesListener::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
                RJSType_RPreferencesListenerAdapter::getIdStatic()
                
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RProgressHandler::id = -1;

      int RJSType_RProgressHandler::getId() const {
          return RJSType_RProgressHandler::getIdStatic();
      }

      int RJSType_RProgressHandler::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RProgressHandler());
          }
          return id;
      }


      
        bool RJSType_RProgressHandler::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RPropertyEvent::id = -1;

      int RJSType_RPropertyEvent::getId() const {
          return RJSType_RPropertyEvent::getIdStatic();
      }

      int RJSType_RPropertyEvent::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RPropertyEvent());
          }
          return id;
      }


      
        bool RJSType_RPropertyEvent::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RPropertyListener::id = -1;

      int RJSType_RPropertyListener::getId() const {
          return RJSType_RPropertyListener::getIdStatic();
      }

      int RJSType_RPropertyListener::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RPropertyListener());
          }
          return id;
      }


      
        bool RJSType_RPropertyListener::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
                RJSType_RPropertyEditor::getIdStatic()
                ,
                RJSType_RPropertyListenerAdapter::getIdStatic()
                
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RRestrictAngleLength::id = -1;

      int RJSType_RRestrictAngleLength::getId() const {
          return RJSType_RRestrictAngleLength::getIdStatic();
      }

      int RJSType_RRestrictAngleLength::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RRestrictAngleLength());
          }
          return id;
      }


      
        bool RJSType_RRestrictAngleLength::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RRestrictHorizontal::id = -1;

      int RJSType_RRestrictHorizontal::getId() const {
          return RJSType_RRestrictHorizontal::getIdStatic();
      }

      int RJSType_RRestrictHorizontal::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RRestrictHorizontal());
          }
          return id;
      }


      
        bool RJSType_RRestrictHorizontal::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RRestrictOff::id = -1;

      int RJSType_RRestrictOff::getId() const {
          return RJSType_RRestrictOff::getIdStatic();
      }

      int RJSType_RRestrictOff::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RRestrictOff());
          }
          return id;
      }


      
        bool RJSType_RRestrictOff::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RRestrictOrthogonal::id = -1;

      int RJSType_RRestrictOrthogonal::getId() const {
          return RJSType_RRestrictOrthogonal::getIdStatic();
      }

      int RJSType_RRestrictOrthogonal::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RRestrictOrthogonal());
          }
          return id;
      }


      
        bool RJSType_RRestrictOrthogonal::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
                RJSType_RRestrictHorizontal::getIdStatic()
                ,
                RJSType_RRestrictVertical::getIdStatic()
                
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RRestrictVertical::id = -1;

      int RJSType_RRestrictVertical::getId() const {
          return RJSType_RRestrictVertical::getIdStatic();
      }

      int RJSType_RRestrictVertical::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RRestrictVertical());
          }
          return id;
      }


      
        bool RJSType_RRestrictVertical::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RRuler::id = -1;

      int RJSType_RRuler::getId() const {
          return RJSType_RRuler::getIdStatic();
      }

      int RJSType_RRuler::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RRuler());
          }
          return id;
      }


      
        bool RJSType_RRuler::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
                RJSType_RRulerQt::getIdStatic()
                
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RScaleSelectionOperation::id = -1;

      int RJSType_RScaleSelectionOperation::getId() const {
          return RJSType_RScaleSelectionOperation::getIdStatic();
      }

      int RJSType_RScaleSelectionOperation::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RScaleSelectionOperation());
          }
          return id;
      }


      
        bool RJSType_RScaleSelectionOperation::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RSelectionListener::id = -1;

      int RJSType_RSelectionListener::getId() const {
          return RJSType_RSelectionListener::getIdStatic();
      }

      int RJSType_RSelectionListener::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RSelectionListener());
          }
          return id;
      }


      
        bool RJSType_RSelectionListener::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
                RJSType_RGuiAction::getIdStatic()
                ,
                RJSType_RSelectionListenerAdapter::getIdStatic()
                
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RSnap::id = -1;

      int RJSType_RSnap::getId() const {
          return RJSType_RSnap::getIdStatic();
      }

      int RJSType_RSnap::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RSnap());
          }
          return id;
      }


      
        bool RJSType_RSnap::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
                RJSType_RSnapAuto::getIdStatic()
                ,
                RJSType_RSnapCenter::getIdStatic()
                ,
                RJSType_RSnapDistance::getIdStatic()
                ,
                RJSType_RSnapEnd::getIdStatic()
                ,
                RJSType_RSnapEntityBase::getIdStatic()
                ,
                RJSType_RSnapFree::getIdStatic()
                ,
                RJSType_RSnapGrid::getIdStatic()
                ,
                RJSType_RSnapIntersection::getIdStatic()
                ,
                RJSType_RSnapMiddle::getIdStatic()
                ,
                RJSType_RSnapOnEntity::getIdStatic()
                ,
                RJSType_RSnapPerpendicular::getIdStatic()
                ,
                RJSType_RSnapReference::getIdStatic()
                ,
                RJSType_RSnapTangential::getIdStatic()
                
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RSnapAuto::id = -1;

      int RJSType_RSnapAuto::getId() const {
          return RJSType_RSnapAuto::getIdStatic();
      }

      int RJSType_RSnapAuto::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RSnapAuto());
          }
          return id;
      }


      
        bool RJSType_RSnapAuto::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RSnapCenter::id = -1;

      int RJSType_RSnapCenter::getId() const {
          return RJSType_RSnapCenter::getIdStatic();
      }

      int RJSType_RSnapCenter::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RSnapCenter());
          }
          return id;
      }


      
        bool RJSType_RSnapCenter::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RSnapDistance::id = -1;

      int RJSType_RSnapDistance::getId() const {
          return RJSType_RSnapDistance::getIdStatic();
      }

      int RJSType_RSnapDistance::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RSnapDistance());
          }
          return id;
      }


      
        bool RJSType_RSnapDistance::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RSnapEnd::id = -1;

      int RJSType_RSnapEnd::getId() const {
          return RJSType_RSnapEnd::getIdStatic();
      }

      int RJSType_RSnapEnd::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RSnapEnd());
          }
          return id;
      }


      
        bool RJSType_RSnapEnd::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RSnapEntityBase::id = -1;

      int RJSType_RSnapEntityBase::getId() const {
          return RJSType_RSnapEntityBase::getIdStatic();
      }

      int RJSType_RSnapEntityBase::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RSnapEntityBase());
          }
          return id;
      }


      
        bool RJSType_RSnapEntityBase::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
                RJSType_RSnapCenter::getIdStatic()
                ,
                RJSType_RSnapDistance::getIdStatic()
                ,
                RJSType_RSnapEnd::getIdStatic()
                ,
                RJSType_RSnapMiddle::getIdStatic()
                ,
                RJSType_RSnapOnEntity::getIdStatic()
                ,
                RJSType_RSnapPerpendicular::getIdStatic()
                ,
                RJSType_RSnapReference::getIdStatic()
                ,
                RJSType_RSnapTangential::getIdStatic()
                
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RSnapFree::id = -1;

      int RJSType_RSnapFree::getId() const {
          return RJSType_RSnapFree::getIdStatic();
      }

      int RJSType_RSnapFree::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RSnapFree());
          }
          return id;
      }


      
        bool RJSType_RSnapFree::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RSnapGrid::id = -1;

      int RJSType_RSnapGrid::getId() const {
          return RJSType_RSnapGrid::getIdStatic();
      }

      int RJSType_RSnapGrid::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RSnapGrid());
          }
          return id;
      }


      
        bool RJSType_RSnapGrid::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RSnapIntersection::id = -1;

      int RJSType_RSnapIntersection::getId() const {
          return RJSType_RSnapIntersection::getIdStatic();
      }

      int RJSType_RSnapIntersection::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RSnapIntersection());
          }
          return id;
      }


      
        bool RJSType_RSnapIntersection::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RSnapListener::id = -1;

      int RJSType_RSnapListener::getId() const {
          return RJSType_RSnapListener::getIdStatic();
      }

      int RJSType_RSnapListener::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RSnapListener());
          }
          return id;
      }


      
        bool RJSType_RSnapListener::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RSnapMiddle::id = -1;

      int RJSType_RSnapMiddle::getId() const {
          return RJSType_RSnapMiddle::getIdStatic();
      }

      int RJSType_RSnapMiddle::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RSnapMiddle());
          }
          return id;
      }


      
        bool RJSType_RSnapMiddle::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RSnapOnEntity::id = -1;

      int RJSType_RSnapOnEntity::getId() const {
          return RJSType_RSnapOnEntity::getIdStatic();
      }

      int RJSType_RSnapOnEntity::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RSnapOnEntity());
          }
          return id;
      }


      
        bool RJSType_RSnapOnEntity::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RSnapPerpendicular::id = -1;

      int RJSType_RSnapPerpendicular::getId() const {
          return RJSType_RSnapPerpendicular::getIdStatic();
      }

      int RJSType_RSnapPerpendicular::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RSnapPerpendicular());
          }
          return id;
      }


      
        bool RJSType_RSnapPerpendicular::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RSnapReference::id = -1;

      int RJSType_RSnapReference::getId() const {
          return RJSType_RSnapReference::getIdStatic();
      }

      int RJSType_RSnapReference::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RSnapReference());
          }
          return id;
      }


      
        bool RJSType_RSnapReference::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RSnapRestriction::id = -1;

      int RJSType_RSnapRestriction::getId() const {
          return RJSType_RSnapRestriction::getIdStatic();
      }

      int RJSType_RSnapRestriction::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RSnapRestriction());
          }
          return id;
      }


      
        bool RJSType_RSnapRestriction::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
                RJSType_RRestrictAngleLength::getIdStatic()
                ,
                RJSType_RRestrictHorizontal::getIdStatic()
                ,
                RJSType_RRestrictOff::getIdStatic()
                ,
                RJSType_RRestrictOrthogonal::getIdStatic()
                ,
                RJSType_RRestrictVertical::getIdStatic()
                
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RSnapTangential::id = -1;

      int RJSType_RSnapTangential::getId() const {
          return RJSType_RSnapTangential::getIdStatic();
      }

      int RJSType_RSnapTangential::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RSnapTangential());
          }
          return id;
      }


      
        bool RJSType_RSnapTangential::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RSpatialIndex::id = -1;

      int RJSType_RSpatialIndex::getId() const {
          return RJSType_RSpatialIndex::getIdStatic();
      }

      int RJSType_RSpatialIndex::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RSpatialIndex());
          }
          return id;
      }


      
        bool RJSType_RSpatialIndex::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
                RJSType_RSpatialIndexNavel::getIdStatic()
                ,
                RJSType_RSpatialIndexSimple::getIdStatic()
                
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RSpatialIndexSimple::id = -1;

      int RJSType_RSpatialIndexSimple::getId() const {
          return RJSType_RSpatialIndexSimple::getIdStatic();
      }

      int RJSType_RSpatialIndexSimple::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RSpatialIndexSimple());
          }
          return id;
      }


      
        bool RJSType_RSpatialIndexSimple::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RSpatialIndexVisitor::id = -1;

      int RJSType_RSpatialIndexVisitor::getId() const {
          return RJSType_RSpatialIndexVisitor::getIdStatic();
      }

      int RJSType_RSpatialIndexVisitor::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RSpatialIndexVisitor());
          }
          return id;
      }


      
        bool RJSType_RSpatialIndexVisitor::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
                RJSType_RSpatialIndexVisitorAdapter::getIdStatic()
                
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RStorage::id = -1;

      int RJSType_RStorage::getId() const {
          return RJSType_RStorage::getIdStatic();
      }

      int RJSType_RStorage::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RStorage());
          }
          return id;
      }


      
        bool RJSType_RStorage::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
                RJSType_RMemoryStorage::getIdStatic()
                
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RTabletEvent::id = -1;

      int RJSType_RTabletEvent::getId() const {
          return RJSType_RTabletEvent::getIdStatic();
      }

      int RJSType_RTabletEvent::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RTabletEvent());
          }
          return id;
      }


      
        bool RJSType_RTabletEvent::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RTerminateEvent::id = -1;

      int RJSType_RTerminateEvent::getId() const {
          return RJSType_RTerminateEvent::getIdStatic();
      }

      int RJSType_RTerminateEvent::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RTerminateEvent());
          }
          return id;
      }


      
        bool RJSType_RTerminateEvent::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RTextRenderer::id = -1;

      int RJSType_RTextRenderer::getId() const {
          return RJSType_RTextRenderer::getIdStatic();
      }

      int RJSType_RTextRenderer::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RTextRenderer());
          }
          return id;
      }


      
        bool RJSType_RTextRenderer::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RTransactionListener::id = -1;

      int RJSType_RTransactionListener::getId() const {
          return RJSType_RTransactionListener::getIdStatic();
      }

      int RJSType_RTransactionListener::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RTransactionListener());
          }
          return id;
      }


      
        bool RJSType_RTransactionListener::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
                RJSType_RGuiAction::getIdStatic()
                ,
                RJSType_RTransactionListenerAdapter::getIdStatic()
                
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RTransactionStack::id = -1;

      int RJSType_RTransactionStack::getId() const {
          return RJSType_RTransactionStack::getIdStatic();
      }

      int RJSType_RTransactionStack::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RTransactionStack());
          }
          return id;
      }


      
        bool RJSType_RTransactionStack::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RTransformation::id = -1;

      int RJSType_RTransformation::getId() const {
          return RJSType_RTransformation::getIdStatic();
      }

      int RJSType_RTransformation::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RTransformation());
          }
          return id;
      }


      
        bool RJSType_RTransformation::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
                RJSType_RTranslation::getIdStatic()
                
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RTranslation::id = -1;

      int RJSType_RTranslation::getId() const {
          return RJSType_RTranslation::getIdStatic();
      }

      int RJSType_RTranslation::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RTranslation());
          }
          return id;
      }


      
        bool RJSType_RTranslation::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RUcsListener::id = -1;

      int RJSType_RUcsListener::getId() const {
          return RJSType_RUcsListener::getIdStatic();
      }

      int RJSType_RUcsListener::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RUcsListener());
          }
          return id;
      }


      
        bool RJSType_RUcsListener::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RViewFocusListener::id = -1;

      int RJSType_RViewFocusListener::getId() const {
          return RJSType_RViewFocusListener::getIdStatic();
      }

      int RJSType_RViewFocusListener::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RViewFocusListener());
          }
          return id;
      }


      
        bool RJSType_RViewFocusListener::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
                RJSType_RViewFocusListenerAdapter::getIdStatic()
                
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RViewListener::id = -1;

      int RJSType_RViewListener::getId() const {
          return RJSType_RViewListener::getIdStatic();
      }

      int RJSType_RViewListener::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RViewListener());
          }
          return id;
      }


      
        bool RJSType_RViewListener::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
                RJSType_RViewListenerAdapter::getIdStatic()
                
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RWheelEvent::id = -1;

      int RJSType_RWheelEvent::getId() const {
          return RJSType_RWheelEvent::getIdStatic();
      }

      int RJSType_RWheelEvent::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RWheelEvent());
          }
          return id;
      }


      
        bool RJSType_RWheelEvent::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      

  
      int RJSType_RBlockListenerAdapter::id = -1;

      int RJSType_RBlockListenerAdapter::getId() const {
          return RJSType_RBlockListenerAdapter::getIdStatic();
      }

      int RJSType_RBlockListenerAdapter::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RBlockListenerAdapter());
          }
          return id;
      }


      
        bool RJSType_RBlockListenerAdapter::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RCadToolBar::id = -1;

      int RJSType_RCadToolBar::getId() const {
          return RJSType_RCadToolBar::getIdStatic();
      }

      int RJSType_RCadToolBar::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RCadToolBar());
          }
          return id;
      }


      
        bool RJSType_RCadToolBar::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RCadToolBarPanel::id = -1;

      int RJSType_RCadToolBarPanel::getId() const {
          return RJSType_RCadToolBarPanel::getIdStatic();
      }

      int RJSType_RCadToolBarPanel::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RCadToolBarPanel());
          }
          return id;
      }


      
        bool RJSType_RCadToolBarPanel::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RCharacterWidget::id = -1;

      int RJSType_RCharacterWidget::getId() const {
          return RJSType_RCharacterWidget::getIdStatic();
      }

      int RJSType_RCharacterWidget::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RCharacterWidget());
          }
          return id;
      }


      
        bool RJSType_RCharacterWidget::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RColorCombo::id = -1;

      int RJSType_RColorCombo::getId() const {
          return RJSType_RColorCombo::getIdStatic();
      }

      int RJSType_RColorCombo::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RColorCombo());
          }
          return id;
      }


      
        bool RJSType_RColorCombo::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RComboBox::id = -1;

      int RJSType_RComboBox::getId() const {
          return RJSType_RComboBox::getIdStatic();
      }

      int RJSType_RComboBox::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RComboBox());
          }
          return id;
      }


      
        bool RJSType_RComboBox::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RCommandLine::id = -1;

      int RJSType_RCommandLine::getId() const {
          return RJSType_RCommandLine::getIdStatic();
      }

      int RJSType_RCommandLine::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RCommandLine());
          }
          return id;
      }


      
        bool RJSType_RCommandLine::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RCoordinateListenerAdapter::id = -1;

      int RJSType_RCoordinateListenerAdapter::getId() const {
          return RJSType_RCoordinateListenerAdapter::getIdStatic();
      }

      int RJSType_RCoordinateListenerAdapter::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RCoordinateListenerAdapter());
          }
          return id;
      }


      
        bool RJSType_RCoordinateListenerAdapter::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RDockWidget::id = -1;

      int RJSType_RDockWidget::getId() const {
          return RJSType_RDockWidget::getIdStatic();
      }

      int RJSType_RDockWidget::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RDockWidget());
          }
          return id;
      }


      
        bool RJSType_RDockWidget::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_REventFilter::id = -1;

      int RJSType_REventFilter::getId() const {
          return RJSType_REventFilter::getIdStatic();
      }

      int RJSType_REventFilter::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_REventFilter());
          }
          return id;
      }


      
        bool RJSType_REventFilter::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RExportListenerAdapter::id = -1;

      int RJSType_RExportListenerAdapter::getId() const {
          return RJSType_RExportListenerAdapter::getIdStatic();
      }

      int RJSType_RExportListenerAdapter::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RExportListenerAdapter());
          }
          return id;
      }


      
        bool RJSType_RExportListenerAdapter::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RToolOptionEventFilter::id = -1;

      int RJSType_RToolOptionEventFilter::getId() const {
          return RJSType_RToolOptionEventFilter::getIdStatic();
      }

      int RJSType_RToolOptionEventFilter::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RToolOptionEventFilter());
          }
          return id;
      }


      
        bool RJSType_RToolOptionEventFilter::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_REventHandler::id = -1;

      int RJSType_REventHandler::getId() const {
          return RJSType_REventHandler::getIdStatic();
      }

      int RJSType_REventHandler::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_REventHandler());
          }
          return id;
      }


      
        bool RJSType_REventHandler::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RFileSystemModel::id = -1;

      int RJSType_RFileSystemModel::getId() const {
          return RJSType_RFileSystemModel::getIdStatic();
      }

      int RJSType_RFileSystemModel::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RFileSystemModel());
          }
          return id;
      }


      
        bool RJSType_RFileSystemModel::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RFlowLayout::id = -1;

      int RJSType_RFlowLayout::getId() const {
          return RJSType_RFlowLayout::getIdStatic();
      }

      int RJSType_RFlowLayout::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RFlowLayout());
          }
          return id;
      }


      
        bool RJSType_RFlowLayout::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RFocusListenerAdapter::id = -1;

      int RJSType_RFocusListenerAdapter::getId() const {
          return RJSType_RFocusListenerAdapter::getIdStatic();
      }

      int RJSType_RFocusListenerAdapter::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RFocusListenerAdapter());
          }
          return id;
      }


      
        bool RJSType_RFocusListenerAdapter::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RFontChooserWidget::id = -1;

      int RJSType_RFontChooserWidget::getId() const {
          return RJSType_RFontChooserWidget::getIdStatic();
      }

      int RJSType_RFontChooserWidget::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RFontChooserWidget());
          }
          return id;
      }


      
        bool RJSType_RFontChooserWidget::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RGraphicsViewQt::id = -1;

      int RJSType_RGraphicsViewQt::getId() const {
          return RJSType_RGraphicsViewQt::getIdStatic();
      }

      int RJSType_RGraphicsViewQt::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RGraphicsViewQt());
          }
          return id;
      }


      
        bool RJSType_RGraphicsViewQt::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RGraphicsViewImage::id = -1;

      int RJSType_RGraphicsViewImage::getId() const {
          return RJSType_RGraphicsViewImage::getIdStatic();
      }

      int RJSType_RGraphicsViewImage::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RGraphicsViewImage());
          }
          return id;
      }


      
        bool RJSType_RGraphicsViewImage::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RGraphicsViewWorker::id = -1;

      int RJSType_RGraphicsViewWorker::getId() const {
          return RJSType_RGraphicsViewWorker::getIdStatic();
      }

      int RJSType_RGraphicsViewWorker::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RGraphicsViewWorker());
          }
          return id;
      }


      
        bool RJSType_RGraphicsViewWorker::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RGuiAction::id = -1;

      int RJSType_RGuiAction::getId() const {
          return RJSType_RGuiAction::getIdStatic();
      }

      int RJSType_RGuiAction::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RGuiAction());
          }
          return id;
      }


      
        bool RJSType_RGuiAction::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RImportListenerAdapter::id = -1;

      int RJSType_RImportListenerAdapter::getId() const {
          return RJSType_RImportListenerAdapter::getIdStatic();
      }

      int RJSType_RImportListenerAdapter::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RImportListenerAdapter());
          }
          return id;
      }


      
        bool RJSType_RImportListenerAdapter::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RInterTransactionListenerAdapter::id = -1;

      int RJSType_RInterTransactionListenerAdapter::getId() const {
          return RJSType_RInterTransactionListenerAdapter::getIdStatic();
      }

      int RJSType_RInterTransactionListenerAdapter::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RInterTransactionListenerAdapter());
          }
          return id;
      }


      
        bool RJSType_RInterTransactionListenerAdapter::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RKeyListenerAdapter::id = -1;

      int RJSType_RKeyListenerAdapter::getId() const {
          return RJSType_RKeyListenerAdapter::getIdStatic();
      }

      int RJSType_RKeyListenerAdapter::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RKeyListenerAdapter());
          }
          return id;
      }


      
        bool RJSType_RKeyListenerAdapter::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RLayerListenerAdapter::id = -1;

      int RJSType_RLayerListenerAdapter::getId() const {
          return RJSType_RLayerListenerAdapter::getIdStatic();
      }

      int RJSType_RLayerListenerAdapter::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RLayerListenerAdapter());
          }
          return id;
      }


      
        bool RJSType_RLayerListenerAdapter::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RLinetypeCombo::id = -1;

      int RJSType_RLinetypeCombo::getId() const {
          return RJSType_RLinetypeCombo::getIdStatic();
      }

      int RJSType_RLinetypeCombo::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RLinetypeCombo());
          }
          return id;
      }


      
        bool RJSType_RLinetypeCombo::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RLineweightCombo::id = -1;

      int RJSType_RLineweightCombo::getId() const {
          return RJSType_RLineweightCombo::getIdStatic();
      }

      int RJSType_RLineweightCombo::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RLineweightCombo());
          }
          return id;
      }


      
        bool RJSType_RLineweightCombo::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RListView::id = -1;

      int RJSType_RListView::getId() const {
          return RJSType_RListView::getIdStatic();
      }

      int RJSType_RListView::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RListView());
          }
          return id;
      }


      
        bool RJSType_RListView::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RListWidget::id = -1;

      int RJSType_RListWidget::getId() const {
          return RJSType_RListWidget::getIdStatic();
      }

      int RJSType_RListWidget::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RListWidget());
          }
          return id;
      }


      
        bool RJSType_RListWidget::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RMainWindowQt::id = -1;

      int RJSType_RMainWindowQt::getId() const {
          return RJSType_RMainWindowQt::getIdStatic();
      }

      int RJSType_RMainWindowQt::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RMainWindowQt());
          }
          return id;
      }


      
        bool RJSType_RMainWindowQt::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RMathComboBox::id = -1;

      int RJSType_RMathComboBox::getId() const {
          return RJSType_RMathComboBox::getIdStatic();
      }

      int RJSType_RMathComboBox::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RMathComboBox());
          }
          return id;
      }


      
        bool RJSType_RMathComboBox::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RMathLineEdit::id = -1;

      int RJSType_RMathLineEdit::getId() const {
          return RJSType_RMathLineEdit::getIdStatic();
      }

      int RJSType_RMathLineEdit::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RMathLineEdit());
          }
          return id;
      }


      
        bool RJSType_RMathLineEdit::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RMdiArea::id = -1;

      int RJSType_RMdiArea::getId() const {
          return RJSType_RMdiArea::getIdStatic();
      }

      int RJSType_RMdiArea::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RMdiArea());
          }
          return id;
      }


      
        bool RJSType_RMdiArea::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RMdiChildQt::id = -1;

      int RJSType_RMdiChildQt::getId() const {
          return RJSType_RMdiChildQt::getIdStatic();
      }

      int RJSType_RMdiChildQt::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RMdiChildQt());
          }
          return id;
      }


      
        bool RJSType_RMdiChildQt::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RPaletteListenerAdapter::id = -1;

      int RJSType_RPaletteListenerAdapter::getId() const {
          return RJSType_RPaletteListenerAdapter::getIdStatic();
      }

      int RJSType_RPaletteListenerAdapter::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RPaletteListenerAdapter());
          }
          return id;
      }


      
        bool RJSType_RPaletteListenerAdapter::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RPenListenerAdapter::id = -1;

      int RJSType_RPenListenerAdapter::getId() const {
          return RJSType_RPenListenerAdapter::getIdStatic();
      }

      int RJSType_RPenListenerAdapter::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RPenListenerAdapter());
          }
          return id;
      }


      
        bool RJSType_RPenListenerAdapter::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RPreferencesListenerAdapter::id = -1;

      int RJSType_RPreferencesListenerAdapter::getId() const {
          return RJSType_RPreferencesListenerAdapter::getIdStatic();
      }

      int RJSType_RPreferencesListenerAdapter::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RPreferencesListenerAdapter());
          }
          return id;
      }


      
        bool RJSType_RPreferencesListenerAdapter::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RPropertyEditor::id = -1;

      int RJSType_RPropertyEditor::getId() const {
          return RJSType_RPropertyEditor::getIdStatic();
      }

      int RJSType_RPropertyEditor::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RPropertyEditor());
          }
          return id;
      }


      
        bool RJSType_RPropertyEditor::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RPropertyListenerAdapter::id = -1;

      int RJSType_RPropertyListenerAdapter::getId() const {
          return RJSType_RPropertyListenerAdapter::getIdStatic();
      }

      int RJSType_RPropertyListenerAdapter::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RPropertyListenerAdapter());
          }
          return id;
      }


      
        bool RJSType_RPropertyListenerAdapter::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RRulerQt::id = -1;

      int RJSType_RRulerQt::getId() const {
          return RJSType_RRulerQt::getIdStatic();
      }

      int RJSType_RRulerQt::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RRulerQt());
          }
          return id;
      }


      
        bool RJSType_RRulerQt::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RSelectionListenerAdapter::id = -1;

      int RJSType_RSelectionListenerAdapter::getId() const {
          return RJSType_RSelectionListenerAdapter::getIdStatic();
      }

      int RJSType_RSelectionListenerAdapter::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RSelectionListenerAdapter());
          }
          return id;
      }


      
        bool RJSType_RSelectionListenerAdapter::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RSingleApplication::id = -1;

      int RJSType_RSingleApplication::getId() const {
          return RJSType_RSingleApplication::getIdStatic();
      }

      int RJSType_RSingleApplication::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RSingleApplication());
          }
          return id;
      }


      
        bool RJSType_RSingleApplication::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RTextEdit::id = -1;

      int RJSType_RTextEdit::getId() const {
          return RJSType_RTextEdit::getIdStatic();
      }

      int RJSType_RTextEdit::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RTextEdit());
          }
          return id;
      }


      
        bool RJSType_RTextEdit::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RToolButton::id = -1;

      int RJSType_RToolButton::getId() const {
          return RJSType_RToolButton::getIdStatic();
      }

      int RJSType_RToolButton::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RToolButton());
          }
          return id;
      }


      
        bool RJSType_RToolButton::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RToolMatrixItemDelegate::id = -1;

      int RJSType_RToolMatrixItemDelegate::getId() const {
          return RJSType_RToolMatrixItemDelegate::getIdStatic();
      }

      int RJSType_RToolMatrixItemDelegate::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RToolMatrixItemDelegate());
          }
          return id;
      }


      
        bool RJSType_RToolMatrixItemDelegate::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RTransactionListenerAdapter::id = -1;

      int RJSType_RTransactionListenerAdapter::getId() const {
          return RJSType_RTransactionListenerAdapter::getIdStatic();
      }

      int RJSType_RTransactionListenerAdapter::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RTransactionListenerAdapter());
          }
          return id;
      }


      
        bool RJSType_RTransactionListenerAdapter::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RTreeWidget::id = -1;

      int RJSType_RTreeWidget::getId() const {
          return RJSType_RTreeWidget::getIdStatic();
      }

      int RJSType_RTreeWidget::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RTreeWidget());
          }
          return id;
      }


      
        bool RJSType_RTreeWidget::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RViewListenerAdapter::id = -1;

      int RJSType_RViewListenerAdapter::getId() const {
          return RJSType_RViewListenerAdapter::getIdStatic();
      }

      int RJSType_RViewListenerAdapter::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RViewListenerAdapter());
          }
          return id;
      }


      
        bool RJSType_RViewListenerAdapter::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RWidget::id = -1;

      int RJSType_RWidget::getId() const {
          return RJSType_RWidget::getIdStatic();
      }

      int RJSType_RWidget::getIdStatic() {
          if (id<0) {
              id = RJSTypeEnum::reserve(new RJSType_RWidget());
          }
          return id;
      }


      
        bool RJSType_RWidget::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
                RJSType_RCadToolBarPanel::getIdStatic()
                
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      

  

  

  

  

  

  

  

  


        #include "moc_RJSType_qcad.cpp"
      