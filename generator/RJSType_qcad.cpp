
  // Automatically generated, do not edit
  
        #include "RJSType_qcad.h"
      

  
      int RJSType_RMouseCoordinateListener::id = -1;


      
        bool RJSType_RMouseCoordinateListener::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      

  

  
      int RJSType_REntity::id = -1;


      
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
                RJSType_RDimLinearEntity::getIdStatic()
                ,
                RJSType_RDimOrdinateEntity::getIdStatic()
                ,
                RJSType_RDimRadialEntity::getIdStatic()
                ,
                RJSType_RDimRotatedEntity::getIdStatic()
                ,
                RJSType_RDimensionEntity::getIdStatic()
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
                RJSType_RXLineEntity::getIdStatic()
                
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RShape::id = -1;


      
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
                RJSType_RTriangle::getIdStatic()
                ,
                RJSType_RXLine::getIdStatic()
                
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RArc::id = -1;


      
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


      
        bool RJSType_RTriangle::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RXLine::id = -1;


      
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


      
        bool RJSType_RTextLabel::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      

  
      int RJSType_RObject::id = -1;


      
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
                RJSType_RDimensionEntity::getIdStatic()
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
                RJSType_RXLineEntity::getIdStatic()
                
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RArcEntity::id = -1;


      
        bool RJSType_RArcEntity::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RAttributeDefinitionEntity::id = -1;


      
        bool RJSType_RAttributeDefinitionEntity::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RAttributeEntity::id = -1;


      
        bool RJSType_RAttributeEntity::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RBlock::id = -1;


      
        bool RJSType_RBlock::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RBlockReferenceEntity::id = -1;


      
        bool RJSType_RBlockReferenceEntity::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RCircleEntity::id = -1;


      
        bool RJSType_RCircleEntity::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RDimAlignedEntity::id = -1;


      
        bool RJSType_RDimAlignedEntity::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RDimAngular2LEntity::id = -1;


      
        bool RJSType_RDimAngular2LEntity::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RDimAngular3PEntity::id = -1;


      
        bool RJSType_RDimAngular3PEntity::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RDimAngularData::id = -1;


      
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


      
        bool RJSType_RDimArcLengthEntity::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RDimDiametricEntity::id = -1;


      
        bool RJSType_RDimDiametricEntity::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RDimLinearEntity::id = -1;


      
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


      
        bool RJSType_RDimOrdinateEntity::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RDimRadialEntity::id = -1;


      
        bool RJSType_RDimRadialEntity::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RDimRotatedEntity::id = -1;


      
        bool RJSType_RDimRotatedEntity::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RDimStyle::id = -1;


      
        bool RJSType_RDimStyle::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RDimensionEntity::id = -1;


      
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


      
        bool RJSType_RDocumentVariables::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_REllipseEntity::id = -1;


      
        bool RJSType_REllipseEntity::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RFaceEntity::id = -1;


      
        bool RJSType_RFaceEntity::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RHatchEntity::id = -1;


      
        bool RJSType_RHatchEntity::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RImageEntity::id = -1;


      
        bool RJSType_RImageEntity::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RLayer::id = -1;


      
        bool RJSType_RLayer::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RLayerState::id = -1;


      
        bool RJSType_RLayerState::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RLayout::id = -1;


      
        bool RJSType_RLayout::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RLeaderEntity::id = -1;


      
        bool RJSType_RLeaderEntity::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RLineEntity::id = -1;


      
        bool RJSType_RLineEntity::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RLinetype::id = -1;


      
        bool RJSType_RLinetype::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RPointEntity::id = -1;


      
        bool RJSType_RPointEntity::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RPolyline::id = -1;


      
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


      
        bool RJSType_RPolylineEntity::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RRayEntity::id = -1;


      
        bool RJSType_RRayEntity::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RSolidEntity::id = -1;


      
        bool RJSType_RSolidEntity::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RSplineEntity::id = -1;


      
        bool RJSType_RSplineEntity::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RTextEntity::id = -1;


      
        bool RJSType_RTextEntity::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RTextBasedEntity::id = -1;


      
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


      
        bool RJSType_RToleranceEntity::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RTraceEntity::id = -1;


      
        bool RJSType_RTraceEntity::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RUcs::id = -1;


      
        bool RJSType_RUcs::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RView::id = -1;


      
        bool RJSType_RView::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RViewportEntity::id = -1;


      
        bool RJSType_RViewportEntity::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RXLineEntity::id = -1;


      
        bool RJSType_RXLineEntity::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      

  
      int RJSType_RArcData::id = -1;


      
        bool RJSType_RArcData::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RAttributeData::id = -1;


      
        bool RJSType_RAttributeData::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RAttributeDefinitionData::id = -1;


      
        bool RJSType_RAttributeDefinitionData::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RAutoLoadJs::id = -1;


      
        bool RJSType_RAutoLoadJs::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RBlockReferenceData::id = -1;


      
        bool RJSType_RBlockReferenceData::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RBox::id = -1;


      
        bool RJSType_RBox::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RCircleData::id = -1;


      
        bool RJSType_RCircleData::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RColor::id = -1;


      
        bool RJSType_RColor::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RDebug::id = -1;


      
        bool RJSType_RDebug::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RDimAlignedData::id = -1;


      
        bool RJSType_RDimAlignedData::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RDimAngular2LData::id = -1;


      
        bool RJSType_RDimAngular2LData::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RDimAngular3PData::id = -1;


      
        bool RJSType_RDimAngular3PData::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RDimArcLengthData::id = -1;


      
        bool RJSType_RDimArcLengthData::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RDimDiametricData::id = -1;


      
        bool RJSType_RDimDiametricData::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RDimOrdinateData::id = -1;


      
        bool RJSType_RDimOrdinateData::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RDimRadialData::id = -1;


      
        bool RJSType_RDimRadialData::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RDimRotatedData::id = -1;


      
        bool RJSType_RDimRotatedData::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RDimStyleData::id = -1;


      
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


      
        bool RJSType_RDxfServices::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_REllipseData::id = -1;


      
        bool RJSType_REllipseData::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RFaceData::id = -1;


      
        bool RJSType_RFaceData::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RFileCache::id = -1;


      
        bool RJSType_RFileCache::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RFileExporterAdapter::id = -1;


      
        bool RJSType_RFileExporterAdapter::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RFileExporterFactoryAdapter::id = -1;


      
        bool RJSType_RFileExporterFactoryAdapter::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RFileExporterRegistry::id = -1;


      
        bool RJSType_RFileExporterRegistry::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RFileImporterAdapter::id = -1;


      
        bool RJSType_RFileImporterAdapter::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RFileImporterFactoryAdapter::id = -1;


      
        bool RJSType_RFileImporterFactoryAdapter::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RFileImporterRegistry::id = -1;


      
        bool RJSType_RFileImporterRegistry::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RFont::id = -1;


      
        bool RJSType_RFont::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RFontList::id = -1;


      
        bool RJSType_RFontList::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RGraphicsSceneDrawable::id = -1;


      
        bool RJSType_RGraphicsSceneDrawable::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RHatchData::id = -1;


      
        bool RJSType_RHatchData::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RImageData::id = -1;


      
        bool RJSType_RImageData::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RLeaderData::id = -1;


      
        bool RJSType_RLeaderData::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RLineData::id = -1;


      
        bool RJSType_RLineData::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RLinetypePattern::id = -1;


      
        bool RJSType_RLinetypePattern::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RLineweight::id = -1;


      
        bool RJSType_RLineweight::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RMath::id = -1;


      
        bool RJSType_RMath::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RMatrix::id = -1;


      
        bool RJSType_RMatrix::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RPainterPath::id = -1;


      
        bool RJSType_RPainterPath::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RPattern::id = -1;


      
        bool RJSType_RPattern::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RPatternLine::id = -1;


      
        bool RJSType_RPatternLine::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RPatternList::id = -1;


      
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


      
        bool RJSType_RPatternListImperial::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RPatternListMetric::id = -1;


      
        bool RJSType_RPatternListMetric::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RPluginInfo::id = -1;


      
        bool RJSType_RPluginInfo::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RPluginLoader::id = -1;


      
        bool RJSType_RPluginLoader::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RPointData::id = -1;


      
        bool RJSType_RPointData::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RPolylineData::id = -1;


      
        bool RJSType_RPolylineData::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RPropertyAttributes::id = -1;


      
        bool RJSType_RPropertyAttributes::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RPropertyChange::id = -1;


      
        bool RJSType_RPropertyChange::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RPropertyEditor::id = -1;


      
        bool RJSType_RPropertyEditor::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RPropertyTypeId::id = -1;


      
        bool RJSType_RPropertyTypeId::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RRayData::id = -1;


      
        bool RJSType_RRayData::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RRefPoint::id = -1;


      
        bool RJSType_RRefPoint::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RS::id = -1;


      
        bool RJSType_RS::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RSettings::id = -1;


      
        bool RJSType_RSettings::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RSolidData::id = -1;


      
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


      
        bool RJSType_RSpatialIndexNavel::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RSpatialIndexVisitorAdapter::id = -1;


      
        bool RJSType_RSpatialIndexVisitorAdapter::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RSplineData::id = -1;


      
        bool RJSType_RSplineData::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RTextBasedData::id = -1;


      
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


      
        bool RJSType_RTextData::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RTextLayout::id = -1;


      
        bool RJSType_RTextLayout::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RToleranceData::id = -1;


      
        bool RJSType_RToleranceData::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RTraceData::id = -1;


      
        bool RJSType_RTraceData::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RTransaction::id = -1;


      
        bool RJSType_RTransaction::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RTransform::id = -1;


      
        bool RJSType_RTransform::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RTransformOp::id = -1;


      
        bool RJSType_RTransformOp::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RUnit::id = -1;


      
        bool RJSType_RUnit::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RViewFocusListenerAdapter::id = -1;


      
        bool RJSType_RViewFocusListenerAdapter::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RViewportData::id = -1;


      
        bool RJSType_RViewportData::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RXLineData::id = -1;


      
        bool RJSType_RXLineData::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RVector::id = -1;


      
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


      
        bool RJSType_RActionAdapter::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RAddObjectOperation::id = -1;


      
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


      
        bool RJSType_RChangePropertyOperation::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RClickReferencePointOperation::id = -1;


      
        bool RJSType_RClickReferencePointOperation::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RClipboardOperation::id = -1;


      
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


      
        bool RJSType_RCloseCurrentEvent::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RCommandEvent::id = -1;


      
        bool RJSType_RCommandEvent::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RCoordinateEvent::id = -1;


      
        bool RJSType_RCoordinateEvent::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RCoordinateListener::id = -1;


      
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


      
        bool RJSType_RCopyOperation::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RDeleteAllEntitiesOperation::id = -1;


      
        bool RJSType_RDeleteAllEntitiesOperation::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RDeleteObjectOperation::id = -1;


      
        bool RJSType_RDeleteObjectOperation::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RDeleteObjectsOperation::id = -1;


      
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


      
        bool RJSType_RDeleteSelectionOperation::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RDimensionData::id = -1;


      
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


      
        bool RJSType_RDirected::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RDocument::id = -1;


      
        bool RJSType_RDocument::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RDocumentInterface::id = -1;


      
        bool RJSType_RDocumentInterface::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_REntityData::id = -1;


      
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
                RJSType_RDimLinearData::getIdStatic()
                ,
                RJSType_RDimOrdinateData::getIdStatic()
                ,
                RJSType_RDimRadialData::getIdStatic()
                ,
                RJSType_RDimRotatedData::getIdStatic()
                ,
                RJSType_RDimensionData::getIdStatic()
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
                RJSType_RXLineData::getIdStatic()
                
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_REntityExportListener::id = -1;


      
        bool RJSType_REntityExportListener::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_REntityPickEvent::id = -1;


      
        bool RJSType_REntityPickEvent::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RExplodable::id = -1;


      
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


      
        bool RJSType_RExportListener::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RExporter::id = -1;


      
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


      
        bool RJSType_RGraphicsSceneQt::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RGraphicsView::id = -1;


      
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


      
        bool RJSType_RImportListener::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RImporter::id = -1;


      
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


      
        bool RJSType_RMemoryStorage::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RMessageHandler::id = -1;


      
        bool RJSType_RMessageHandler::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RMixedOperation::id = -1;


      
        bool RJSType_RMixedOperation::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RModifiedListener::id = -1;


      
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


      
        bool RJSType_RModifyObjectOperation::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RModifyObjectsOperation::id = -1;


      
        bool RJSType_RModifyObjectsOperation::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RMouseEvent::id = -1;


      
        bool RJSType_RMouseEvent::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RMoveReferencePointOperation::id = -1;


      
        bool RJSType_RMoveReferencePointOperation::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RMoveSelectionOperation::id = -1;


      
        bool RJSType_RMoveSelectionOperation::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RNewDocumentListener::id = -1;


      
        bool RJSType_RNewDocumentListener::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_ROperation::id = -1;


      
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


      
        bool RJSType_ROperationUtils::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_ROrthoGrid::id = -1;


      
        bool RJSType_ROrthoGrid::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RPaletteListener::id = -1;


      
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


      
        bool RJSType_RPasteOperation::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RPenListener::id = -1;


      
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


      
        bool RJSType_RPluginInterface::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RPreferencesListener::id = -1;


      
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


      
        bool RJSType_RProgressHandler::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RPropertyEvent::id = -1;


      
        bool RJSType_RPropertyEvent::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RPropertyListener::id = -1;


      
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


      
        bool RJSType_RRestrictAngleLength::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RRestrictHorizontal::id = -1;


      
        bool RJSType_RRestrictHorizontal::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RRestrictOff::id = -1;


      
        bool RJSType_RRestrictOff::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RRestrictOrthogonal::id = -1;


      
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


      
        bool RJSType_RRestrictVertical::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RRuler::id = -1;


      
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


      
        bool RJSType_RScaleSelectionOperation::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RSelectionListener::id = -1;


      
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


      
        bool RJSType_RSnapAuto::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RSnapCenter::id = -1;


      
        bool RJSType_RSnapCenter::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RSnapDistance::id = -1;


      
        bool RJSType_RSnapDistance::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RSnapEnd::id = -1;


      
        bool RJSType_RSnapEnd::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RSnapEntityBase::id = -1;


      
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


      
        bool RJSType_RSnapFree::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RSnapGrid::id = -1;


      
        bool RJSType_RSnapGrid::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RSnapIntersection::id = -1;


      
        bool RJSType_RSnapIntersection::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RSnapListener::id = -1;


      
        bool RJSType_RSnapListener::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RSnapMiddle::id = -1;


      
        bool RJSType_RSnapMiddle::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RSnapOnEntity::id = -1;


      
        bool RJSType_RSnapOnEntity::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RSnapPerpendicular::id = -1;


      
        bool RJSType_RSnapPerpendicular::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RSnapReference::id = -1;


      
        bool RJSType_RSnapReference::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RSnapRestriction::id = -1;


      
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


      
        bool RJSType_RSnapTangential::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RSpatialIndex::id = -1;


      
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


      
        bool RJSType_RSpatialIndexSimple::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RSpatialIndexVisitor::id = -1;


      
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


      
        bool RJSType_RTabletEvent::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RTerminateEvent::id = -1;


      
        bool RJSType_RTerminateEvent::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RTextRenderer::id = -1;


      
        bool RJSType_RTextRenderer::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RTransactionListener::id = -1;


      
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


      
        bool RJSType_RTransactionStack::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RTransformation::id = -1;


      
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


      
        bool RJSType_RTranslation::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RUcsListener::id = -1;


      
        bool RJSType_RUcsListener::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RViewFocusListener::id = -1;


      
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


      
        bool RJSType_RWheelEvent::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      

  
      int RJSType_RBlockListenerAdapter::id = -1;


      
        bool RJSType_RBlockListenerAdapter::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RCadToolBar::id = -1;


      
        bool RJSType_RCadToolBar::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RCadToolBarPanel::id = -1;


      
        bool RJSType_RCadToolBarPanel::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RCharacterWidget::id = -1;


      
        bool RJSType_RCharacterWidget::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RColorCombo::id = -1;


      
        bool RJSType_RColorCombo::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RCommandLine::id = -1;


      
        bool RJSType_RCommandLine::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RCoordinateListenerAdapter::id = -1;


      
        bool RJSType_RCoordinateListenerAdapter::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RDockWidget::id = -1;


      
        bool RJSType_RDockWidget::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_REventFilter::id = -1;


      
        bool RJSType_REventFilter::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_REventHandler::id = -1;


      
        bool RJSType_REventHandler::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RFileSystemModel::id = -1;


      
        bool RJSType_RFileSystemModel::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RFlowLayout::id = -1;


      
        bool RJSType_RFlowLayout::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RFocusListenerAdapter::id = -1;


      
        bool RJSType_RFocusListenerAdapter::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RFontChooserWidget::id = -1;


      
        bool RJSType_RFontChooserWidget::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RGraphicsViewQt::id = -1;


      
        bool RJSType_RGraphicsViewQt::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RGraphicsViewImage::id = -1;


      
        bool RJSType_RGraphicsViewImage::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RGuiAction::id = -1;


      
        bool RJSType_RGuiAction::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RInterTransactionListenerAdapter::id = -1;


      
        bool RJSType_RInterTransactionListenerAdapter::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RKeyListenerAdapter::id = -1;


      
        bool RJSType_RKeyListenerAdapter::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RLayerListenerAdapter::id = -1;


      
        bool RJSType_RLayerListenerAdapter::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RLinetypeCombo::id = -1;


      
        bool RJSType_RLinetypeCombo::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RLineweightCombo::id = -1;


      
        bool RJSType_RLineweightCombo::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RListView::id = -1;


      
        bool RJSType_RListView::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RListWidget::id = -1;


      
        bool RJSType_RListWidget::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RMainWindowQt::id = -1;


      
        bool RJSType_RMainWindowQt::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RMathComboBox::id = -1;


      
        bool RJSType_RMathComboBox::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RMathLineEdit::id = -1;


      
        bool RJSType_RMathLineEdit::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RMdiArea::id = -1;


      
        bool RJSType_RMdiArea::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RMdiChildQt::id = -1;


      
        bool RJSType_RMdiChildQt::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RPaletteListenerAdapter::id = -1;


      
        bool RJSType_RPaletteListenerAdapter::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RPenListenerAdapter::id = -1;


      
        bool RJSType_RPenListenerAdapter::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RPreferencesListenerAdapter::id = -1;


      
        bool RJSType_RPreferencesListenerAdapter::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RPropertyListenerAdapter::id = -1;


      
        bool RJSType_RPropertyListenerAdapter::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RRulerQt::id = -1;


      
        bool RJSType_RRulerQt::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RSelectionListenerAdapter::id = -1;


      
        bool RJSType_RSelectionListenerAdapter::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RSingleApplication::id = -1;


      
        bool RJSType_RSingleApplication::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RTextEdit::id = -1;


      
        bool RJSType_RTextEdit::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RToolButton::id = -1;


      
        bool RJSType_RToolButton::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RToolMatrixItemDelegate::id = -1;


      
        bool RJSType_RToolMatrixItemDelegate::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RTransactionListenerAdapter::id = -1;


      
        bool RJSType_RTransactionListenerAdapter::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RTreeWidget::id = -1;


      
        bool RJSType_RTreeWidget::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RViewListenerAdapter::id = -1;


      
        bool RJSType_RViewListenerAdapter::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      
      int RJSType_RWidget::id = -1;


      
        bool RJSType_RWidget::isOfType(int otherType) {
            // initialize list of derrived types:
            
            static QSet<int> derrivedTypes = {
              getIdStatic(),
              
                RJSType_RCadToolBarPanel::getIdStatic()
                
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      

  

  

  

  

  

  

  

  

