
  // Automatically generated, do not edit
  
        #include "RJSType_qcad.h"
      

  
      int RJSType_RMouseCoordinateListener::id = -1;


      bool RJSType_RMouseCoordinateListener::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    

  

  
      int RJSType_REntity::id = -1;


      bool RJSType_REntity::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          
            if (otherType==RJSType_RArcEntity::getIdStatic()) return true;
          
            if (otherType==RJSType_RAttributeDefinitionEntity::getIdStatic()) return true;
          
            if (otherType==RJSType_RAttributeEntity::getIdStatic()) return true;
          
            if (otherType==RJSType_RBlockReferenceEntity::getIdStatic()) return true;
          
            if (otherType==RJSType_RCircleEntity::getIdStatic()) return true;
          
            if (otherType==RJSType_RDimAlignedEntity::getIdStatic()) return true;
          
            if (otherType==RJSType_RDimAngular2LEntity::getIdStatic()) return true;
          
            if (otherType==RJSType_RDimAngular3PEntity::getIdStatic()) return true;
          
            if (otherType==RJSType_RDimAngularEntity::getIdStatic()) return true;
          
            if (otherType==RJSType_RDimArcLengthEntity::getIdStatic()) return true;
          
            if (otherType==RJSType_RDimDiametricEntity::getIdStatic()) return true;
          
            if (otherType==RJSType_RDimLinearEntity::getIdStatic()) return true;
          
            if (otherType==RJSType_RDimOrdinateEntity::getIdStatic()) return true;
          
            if (otherType==RJSType_RDimRadialEntity::getIdStatic()) return true;
          
            if (otherType==RJSType_RDimRotatedEntity::getIdStatic()) return true;
          
            if (otherType==RJSType_RDimensionEntity::getIdStatic()) return true;
          
            if (otherType==RJSType_REllipseEntity::getIdStatic()) return true;
          
            if (otherType==RJSType_RFaceEntity::getIdStatic()) return true;
          
            if (otherType==RJSType_RHatchEntity::getIdStatic()) return true;
          
            if (otherType==RJSType_RImageEntity::getIdStatic()) return true;
          
            if (otherType==RJSType_RLeaderEntity::getIdStatic()) return true;
          
            if (otherType==RJSType_RLineEntity::getIdStatic()) return true;
          
            if (otherType==RJSType_RPointEntity::getIdStatic()) return true;
          
            if (otherType==RJSType_RPolylineEntity::getIdStatic()) return true;
          
            if (otherType==RJSType_RRayEntity::getIdStatic()) return true;
          
            if (otherType==RJSType_RSolidEntity::getIdStatic()) return true;
          
            if (otherType==RJSType_RSplineEntity::getIdStatic()) return true;
          
            if (otherType==RJSType_RTextBasedEntity::getIdStatic()) return true;
          
            if (otherType==RJSType_RTextEntity::getIdStatic()) return true;
          
            if (otherType==RJSType_RToleranceEntity::getIdStatic()) return true;
          
            if (otherType==RJSType_RTraceEntity::getIdStatic()) return true;
          
            if (otherType==RJSType_RViewportEntity::getIdStatic()) return true;
          
            if (otherType==RJSType_RXLineEntity::getIdStatic()) return true;
          

          return false;
      }
    
      int RJSType_RShape::id = -1;


      bool RJSType_RShape::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          
            if (otherType==RJSType_RArc::getIdStatic()) return true;
          
            if (otherType==RJSType_RCircle::getIdStatic()) return true;
          
            if (otherType==RJSType_REllipse::getIdStatic()) return true;
          
            if (otherType==RJSType_RLine::getIdStatic()) return true;
          
            if (otherType==RJSType_RPoint::getIdStatic()) return true;
          
            if (otherType==RJSType_RPolyline::getIdStatic()) return true;
          
            if (otherType==RJSType_RRay::getIdStatic()) return true;
          
            if (otherType==RJSType_RSpline::getIdStatic()) return true;
          
            if (otherType==RJSType_RTriangle::getIdStatic()) return true;
          
            if (otherType==RJSType_RXLine::getIdStatic()) return true;
          

          return false;
      }
    
      int RJSType_RArc::id = -1;


      bool RJSType_RArc::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          
            if (otherType==RJSType_RArcData::getIdStatic()) return true;
          

          return false;
      }
    
      int RJSType_RCircle::id = -1;


      bool RJSType_RCircle::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          
            if (otherType==RJSType_RCircleData::getIdStatic()) return true;
          

          return false;
      }
    
      int RJSType_REllipse::id = -1;


      bool RJSType_REllipse::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          
            if (otherType==RJSType_REllipseData::getIdStatic()) return true;
          

          return false;
      }
    
      int RJSType_RLine::id = -1;


      bool RJSType_RLine::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          
            if (otherType==RJSType_RLineData::getIdStatic()) return true;
          

          return false;
      }
    
      int RJSType_RPoint::id = -1;


      bool RJSType_RPoint::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          
            if (otherType==RJSType_RPointData::getIdStatic()) return true;
          
            if (otherType==RJSType_RTextLabel::getIdStatic()) return true;
          
            if (otherType==RJSType_RViewportData::getIdStatic()) return true;
          

          return false;
      }
    
      int RJSType_RRay::id = -1;


      bool RJSType_RRay::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          
            if (otherType==RJSType_RRayData::getIdStatic()) return true;
          

          return false;
      }
    
      int RJSType_RSpline::id = -1;


      bool RJSType_RSpline::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          
            if (otherType==RJSType_RSplineData::getIdStatic()) return true;
          

          return false;
      }
    
      int RJSType_RTriangle::id = -1;


      bool RJSType_RTriangle::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RXLine::id = -1;


      bool RJSType_RXLine::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          
            if (otherType==RJSType_RRay::getIdStatic()) return true;
          
            if (otherType==RJSType_RXLineData::getIdStatic()) return true;
          

          return false;
      }
    
      int RJSType_RTextLabel::id = -1;


      bool RJSType_RTextLabel::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    

  
      int RJSType_RObject::id = -1;


      bool RJSType_RObject::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          
            if (otherType==RJSType_RArcEntity::getIdStatic()) return true;
          
            if (otherType==RJSType_RAttributeDefinitionEntity::getIdStatic()) return true;
          
            if (otherType==RJSType_RAttributeEntity::getIdStatic()) return true;
          
            if (otherType==RJSType_RBlock::getIdStatic()) return true;
          
            if (otherType==RJSType_RBlockReferenceEntity::getIdStatic()) return true;
          
            if (otherType==RJSType_RCircleEntity::getIdStatic()) return true;
          
            if (otherType==RJSType_RDimAlignedEntity::getIdStatic()) return true;
          
            if (otherType==RJSType_RDimAngular2LEntity::getIdStatic()) return true;
          
            if (otherType==RJSType_RDimAngular3PEntity::getIdStatic()) return true;
          
            if (otherType==RJSType_RDimAngularEntity::getIdStatic()) return true;
          
            if (otherType==RJSType_RDimArcLengthEntity::getIdStatic()) return true;
          
            if (otherType==RJSType_RDimDiametricEntity::getIdStatic()) return true;
          
            if (otherType==RJSType_RDimLinearEntity::getIdStatic()) return true;
          
            if (otherType==RJSType_RDimOrdinateEntity::getIdStatic()) return true;
          
            if (otherType==RJSType_RDimRadialEntity::getIdStatic()) return true;
          
            if (otherType==RJSType_RDimRotatedEntity::getIdStatic()) return true;
          
            if (otherType==RJSType_RDimStyle::getIdStatic()) return true;
          
            if (otherType==RJSType_RDimensionEntity::getIdStatic()) return true;
          
            if (otherType==RJSType_RDocumentVariables::getIdStatic()) return true;
          
            if (otherType==RJSType_REllipseEntity::getIdStatic()) return true;
          
            if (otherType==RJSType_REntity::getIdStatic()) return true;
          
            if (otherType==RJSType_RFaceEntity::getIdStatic()) return true;
          
            if (otherType==RJSType_RHatchEntity::getIdStatic()) return true;
          
            if (otherType==RJSType_RImageEntity::getIdStatic()) return true;
          
            if (otherType==RJSType_RLayer::getIdStatic()) return true;
          
            if (otherType==RJSType_RLayerState::getIdStatic()) return true;
          
            if (otherType==RJSType_RLayout::getIdStatic()) return true;
          
            if (otherType==RJSType_RLeaderEntity::getIdStatic()) return true;
          
            if (otherType==RJSType_RLineEntity::getIdStatic()) return true;
          
            if (otherType==RJSType_RLinetype::getIdStatic()) return true;
          
            if (otherType==RJSType_RPointEntity::getIdStatic()) return true;
          
            if (otherType==RJSType_RPolylineEntity::getIdStatic()) return true;
          
            if (otherType==RJSType_RRayEntity::getIdStatic()) return true;
          
            if (otherType==RJSType_RSolidEntity::getIdStatic()) return true;
          
            if (otherType==RJSType_RSplineEntity::getIdStatic()) return true;
          
            if (otherType==RJSType_RTextBasedEntity::getIdStatic()) return true;
          
            if (otherType==RJSType_RTextEntity::getIdStatic()) return true;
          
            if (otherType==RJSType_RToleranceEntity::getIdStatic()) return true;
          
            if (otherType==RJSType_RTraceEntity::getIdStatic()) return true;
          
            if (otherType==RJSType_RUcs::getIdStatic()) return true;
          
            if (otherType==RJSType_RView::getIdStatic()) return true;
          
            if (otherType==RJSType_RViewportEntity::getIdStatic()) return true;
          
            if (otherType==RJSType_RXLineEntity::getIdStatic()) return true;
          

          return false;
      }
    
      int RJSType_RArcEntity::id = -1;


      bool RJSType_RArcEntity::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RAttributeDefinitionEntity::id = -1;


      bool RJSType_RAttributeDefinitionEntity::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RAttributeEntity::id = -1;


      bool RJSType_RAttributeEntity::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RBlock::id = -1;


      bool RJSType_RBlock::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RBlockReferenceEntity::id = -1;


      bool RJSType_RBlockReferenceEntity::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RCircleEntity::id = -1;


      bool RJSType_RCircleEntity::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RDimAlignedEntity::id = -1;


      bool RJSType_RDimAlignedEntity::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RDimAngular2LEntity::id = -1;


      bool RJSType_RDimAngular2LEntity::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RDimAngular3PEntity::id = -1;


      bool RJSType_RDimAngular3PEntity::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RDimAngularData::id = -1;


      bool RJSType_RDimAngularData::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          
            if (otherType==RJSType_RDimAngular2LData::getIdStatic()) return true;
          
            if (otherType==RJSType_RDimAngular3PData::getIdStatic()) return true;
          
            if (otherType==RJSType_RDimArcLengthData::getIdStatic()) return true;
          

          return false;
      }
    
      int RJSType_RDimAngularEntity::id = -1;


      bool RJSType_RDimAngularEntity::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          
            if (otherType==RJSType_RDimAngular2LEntity::getIdStatic()) return true;
          
            if (otherType==RJSType_RDimAngular3PEntity::getIdStatic()) return true;
          
            if (otherType==RJSType_RDimArcLengthEntity::getIdStatic()) return true;
          

          return false;
      }
    
      int RJSType_RDimArcLengthEntity::id = -1;


      bool RJSType_RDimArcLengthEntity::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RDimDiametricEntity::id = -1;


      bool RJSType_RDimDiametricEntity::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RDimLinearEntity::id = -1;


      bool RJSType_RDimLinearEntity::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          
            if (otherType==RJSType_RDimAlignedEntity::getIdStatic()) return true;
          
            if (otherType==RJSType_RDimRotatedEntity::getIdStatic()) return true;
          

          return false;
      }
    
      int RJSType_RDimOrdinateEntity::id = -1;


      bool RJSType_RDimOrdinateEntity::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RDimRadialEntity::id = -1;


      bool RJSType_RDimRadialEntity::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RDimRotatedEntity::id = -1;


      bool RJSType_RDimRotatedEntity::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RDimStyle::id = -1;


      bool RJSType_RDimStyle::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RDimensionEntity::id = -1;


      bool RJSType_RDimensionEntity::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          
            if (otherType==RJSType_RDimAlignedEntity::getIdStatic()) return true;
          
            if (otherType==RJSType_RDimAngular2LEntity::getIdStatic()) return true;
          
            if (otherType==RJSType_RDimAngular3PEntity::getIdStatic()) return true;
          
            if (otherType==RJSType_RDimAngularEntity::getIdStatic()) return true;
          
            if (otherType==RJSType_RDimArcLengthEntity::getIdStatic()) return true;
          
            if (otherType==RJSType_RDimDiametricEntity::getIdStatic()) return true;
          
            if (otherType==RJSType_RDimLinearEntity::getIdStatic()) return true;
          
            if (otherType==RJSType_RDimOrdinateEntity::getIdStatic()) return true;
          
            if (otherType==RJSType_RDimRadialEntity::getIdStatic()) return true;
          
            if (otherType==RJSType_RDimRotatedEntity::getIdStatic()) return true;
          

          return false;
      }
    
      int RJSType_RDocumentVariables::id = -1;


      bool RJSType_RDocumentVariables::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_REllipseEntity::id = -1;


      bool RJSType_REllipseEntity::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RFaceEntity::id = -1;


      bool RJSType_RFaceEntity::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RHatchEntity::id = -1;


      bool RJSType_RHatchEntity::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RImageEntity::id = -1;


      bool RJSType_RImageEntity::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RLayer::id = -1;


      bool RJSType_RLayer::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RLayerState::id = -1;


      bool RJSType_RLayerState::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RLayout::id = -1;


      bool RJSType_RLayout::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RLeaderEntity::id = -1;


      bool RJSType_RLeaderEntity::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RLineEntity::id = -1;


      bool RJSType_RLineEntity::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RLinetype::id = -1;


      bool RJSType_RLinetype::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RPointEntity::id = -1;


      bool RJSType_RPointEntity::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RPolyline::id = -1;


      bool RJSType_RPolyline::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          
            if (otherType==RJSType_RLeaderData::getIdStatic()) return true;
          
            if (otherType==RJSType_RPolylineData::getIdStatic()) return true;
          
            if (otherType==RJSType_RSolidData::getIdStatic()) return true;
          

          return false;
      }
    
      int RJSType_RPolylineEntity::id = -1;


      bool RJSType_RPolylineEntity::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RRayEntity::id = -1;


      bool RJSType_RRayEntity::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RSolidEntity::id = -1;


      bool RJSType_RSolidEntity::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RSplineEntity::id = -1;


      bool RJSType_RSplineEntity::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RTextEntity::id = -1;


      bool RJSType_RTextEntity::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RTextBasedEntity::id = -1;


      bool RJSType_RTextBasedEntity::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          
            if (otherType==RJSType_RAttributeDefinitionEntity::getIdStatic()) return true;
          
            if (otherType==RJSType_RAttributeEntity::getIdStatic()) return true;
          
            if (otherType==RJSType_RTextEntity::getIdStatic()) return true;
          

          return false;
      }
    
      int RJSType_RToleranceEntity::id = -1;


      bool RJSType_RToleranceEntity::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RTraceEntity::id = -1;


      bool RJSType_RTraceEntity::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RUcs::id = -1;


      bool RJSType_RUcs::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RView::id = -1;


      bool RJSType_RView::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RViewportEntity::id = -1;


      bool RJSType_RViewportEntity::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RXLineEntity::id = -1;


      bool RJSType_RXLineEntity::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    

  
      int RJSType_RArcData::id = -1;


      bool RJSType_RArcData::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RAttributeData::id = -1;


      bool RJSType_RAttributeData::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RAttributeDefinitionData::id = -1;


      bool RJSType_RAttributeDefinitionData::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RAutoLoadJs::id = -1;


      bool RJSType_RAutoLoadJs::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RBlockReferenceData::id = -1;


      bool RJSType_RBlockReferenceData::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RBox::id = -1;


      bool RJSType_RBox::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RCircleData::id = -1;


      bool RJSType_RCircleData::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RColor::id = -1;


      bool RJSType_RColor::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RDebug::id = -1;


      bool RJSType_RDebug::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RDimAlignedData::id = -1;


      bool RJSType_RDimAlignedData::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RDimAngular2LData::id = -1;


      bool RJSType_RDimAngular2LData::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RDimAngular3PData::id = -1;


      bool RJSType_RDimAngular3PData::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RDimArcLengthData::id = -1;


      bool RJSType_RDimArcLengthData::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RDimDiametricData::id = -1;


      bool RJSType_RDimDiametricData::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RDimOrdinateData::id = -1;


      bool RJSType_RDimOrdinateData::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RDimRadialData::id = -1;


      bool RJSType_RDimRadialData::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RDimRotatedData::id = -1;


      bool RJSType_RDimRotatedData::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RDimStyleData::id = -1;


      bool RJSType_RDimStyleData::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          
            if (otherType==RJSType_RDimStyle::getIdStatic()) return true;
          

          return false;
      }
    
      int RJSType_RDxfServices::id = -1;


      bool RJSType_RDxfServices::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_REllipseData::id = -1;


      bool RJSType_REllipseData::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RFaceData::id = -1;


      bool RJSType_RFaceData::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RFileCache::id = -1;


      bool RJSType_RFileCache::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RFileExporterAdapter::id = -1;


      bool RJSType_RFileExporterAdapter::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RFileExporterFactoryAdapter::id = -1;


      bool RJSType_RFileExporterFactoryAdapter::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RFileExporterRegistry::id = -1;


      bool RJSType_RFileExporterRegistry::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RFileImporterAdapter::id = -1;


      bool RJSType_RFileImporterAdapter::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RFileImporterFactoryAdapter::id = -1;


      bool RJSType_RFileImporterFactoryAdapter::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RFileImporterRegistry::id = -1;


      bool RJSType_RFileImporterRegistry::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RFont::id = -1;


      bool RJSType_RFont::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RFontList::id = -1;


      bool RJSType_RFontList::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RGraphicsSceneDrawable::id = -1;


      bool RJSType_RGraphicsSceneDrawable::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RHatchData::id = -1;


      bool RJSType_RHatchData::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RImageData::id = -1;


      bool RJSType_RImageData::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RLeaderData::id = -1;


      bool RJSType_RLeaderData::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RLineData::id = -1;


      bool RJSType_RLineData::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RLinetypePattern::id = -1;


      bool RJSType_RLinetypePattern::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RLineweight::id = -1;


      bool RJSType_RLineweight::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RMath::id = -1;


      bool RJSType_RMath::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RMatrix::id = -1;


      bool RJSType_RMatrix::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RPainterPath::id = -1;


      bool RJSType_RPainterPath::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RPattern::id = -1;


      bool RJSType_RPattern::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RPatternLine::id = -1;


      bool RJSType_RPatternLine::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RPatternList::id = -1;


      bool RJSType_RPatternList::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          
            if (otherType==RJSType_RPatternListImperial::getIdStatic()) return true;
          
            if (otherType==RJSType_RPatternListMetric::getIdStatic()) return true;
          

          return false;
      }
    
      int RJSType_RPatternListImperial::id = -1;


      bool RJSType_RPatternListImperial::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RPatternListMetric::id = -1;


      bool RJSType_RPatternListMetric::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RPluginInfo::id = -1;


      bool RJSType_RPluginInfo::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RPluginLoader::id = -1;


      bool RJSType_RPluginLoader::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RPointData::id = -1;


      bool RJSType_RPointData::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RPolylineData::id = -1;


      bool RJSType_RPolylineData::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RPropertyAttributes::id = -1;


      bool RJSType_RPropertyAttributes::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RPropertyChange::id = -1;


      bool RJSType_RPropertyChange::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RPropertyEditor::id = -1;


      bool RJSType_RPropertyEditor::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RPropertyTypeId::id = -1;


      bool RJSType_RPropertyTypeId::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RRayData::id = -1;


      bool RJSType_RRayData::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RRefPoint::id = -1;


      bool RJSType_RRefPoint::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RS::id = -1;


      bool RJSType_RS::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RSettings::id = -1;


      bool RJSType_RSettings::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RSolidData::id = -1;


      bool RJSType_RSolidData::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          
            if (otherType==RJSType_RFaceData::getIdStatic()) return true;
          
            if (otherType==RJSType_RTraceData::getIdStatic()) return true;
          

          return false;
      }
    
      int RJSType_RSpatialIndexNavel::id = -1;


      bool RJSType_RSpatialIndexNavel::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RSpatialIndexVisitorAdapter::id = -1;


      bool RJSType_RSpatialIndexVisitorAdapter::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RSplineData::id = -1;


      bool RJSType_RSplineData::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RTextBasedData::id = -1;


      bool RJSType_RTextBasedData::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          
            if (otherType==RJSType_RAttributeData::getIdStatic()) return true;
          
            if (otherType==RJSType_RAttributeDefinitionData::getIdStatic()) return true;
          
            if (otherType==RJSType_RTextData::getIdStatic()) return true;
          

          return false;
      }
    
      int RJSType_RTextData::id = -1;


      bool RJSType_RTextData::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RTextLayout::id = -1;


      bool RJSType_RTextLayout::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RToleranceData::id = -1;


      bool RJSType_RToleranceData::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RTraceData::id = -1;


      bool RJSType_RTraceData::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RTransaction::id = -1;


      bool RJSType_RTransaction::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RTransform::id = -1;


      bool RJSType_RTransform::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RTransformOp::id = -1;


      bool RJSType_RTransformOp::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RUnit::id = -1;


      bool RJSType_RUnit::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RViewFocusListenerAdapter::id = -1;


      bool RJSType_RViewFocusListenerAdapter::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RViewportData::id = -1;


      bool RJSType_RViewportData::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RXLineData::id = -1;


      bool RJSType_RXLineData::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RVector::id = -1;


      bool RJSType_RVector::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          
            if (otherType==RJSType_RRefPoint::getIdStatic()) return true;
          

          return false;
      }
    

  
      int RJSType_RPainterPathSource::id = -1;


      bool RJSType_RPainterPathSource::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          
            if (otherType==RJSType_RTextBasedData::getIdStatic()) return true;
          

          return false;
      }
    
      int RJSType_RAction::id = -1;


      bool RJSType_RAction::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          
            if (otherType==RJSType_RActionAdapter::getIdStatic()) return true;
          

          return false;
      }
    
      int RJSType_RActionAdapter::id = -1;


      bool RJSType_RActionAdapter::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RAddObjectOperation::id = -1;


      bool RJSType_RAddObjectOperation::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          
            if (otherType==RJSType_RModifyObjectOperation::getIdStatic()) return true;
          

          return false;
      }
    
      int RJSType_RAddObjectsOperation::id = -1;


      bool RJSType_RAddObjectsOperation::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          
            if (otherType==RJSType_RAddObjectOperation::getIdStatic()) return true;
          
            if (otherType==RJSType_RModifyObjectsOperation::getIdStatic()) return true;
          

          return false;
      }
    
      int RJSType_RBlockListener::id = -1;


      bool RJSType_RBlockListener::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          
            if (otherType==RJSType_RBlockListenerAdapter::getIdStatic()) return true;
          

          return false;
      }
    
      int RJSType_RChangePropertyOperation::id = -1;


      bool RJSType_RChangePropertyOperation::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RClickReferencePointOperation::id = -1;


      bool RJSType_RClickReferencePointOperation::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RClipboardOperation::id = -1;


      bool RJSType_RClipboardOperation::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          
            if (otherType==RJSType_RCopyOperation::getIdStatic()) return true;
          
            if (otherType==RJSType_RDeleteSelectionOperation::getIdStatic()) return true;
          
            if (otherType==RJSType_RPasteOperation::getIdStatic()) return true;
          

          return false;
      }
    
      int RJSType_RCloseCurrentEvent::id = -1;


      bool RJSType_RCloseCurrentEvent::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RCommandEvent::id = -1;


      bool RJSType_RCommandEvent::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RCoordinateEvent::id = -1;


      bool RJSType_RCoordinateEvent::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RCoordinateListener::id = -1;


      bool RJSType_RCoordinateListener::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          
            if (otherType==RJSType_RCoordinateListenerAdapter::getIdStatic()) return true;
          
            if (otherType==RJSType_RRulerQt::getIdStatic()) return true;
          

          return false;
      }
    
      int RJSType_RCopyOperation::id = -1;


      bool RJSType_RCopyOperation::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RDeleteAllEntitiesOperation::id = -1;


      bool RJSType_RDeleteAllEntitiesOperation::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RDeleteObjectOperation::id = -1;


      bool RJSType_RDeleteObjectOperation::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RDeleteObjectsOperation::id = -1;


      bool RJSType_RDeleteObjectsOperation::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          
            if (otherType==RJSType_RDeleteObjectOperation::getIdStatic()) return true;
          

          return false;
      }
    
      int RJSType_RDeleteSelectionOperation::id = -1;


      bool RJSType_RDeleteSelectionOperation::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RDimensionData::id = -1;


      bool RJSType_RDimensionData::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          
            if (otherType==RJSType_RDimAlignedData::getIdStatic()) return true;
          
            if (otherType==RJSType_RDimAngular2LData::getIdStatic()) return true;
          
            if (otherType==RJSType_RDimAngular3PData::getIdStatic()) return true;
          
            if (otherType==RJSType_RDimAngularData::getIdStatic()) return true;
          
            if (otherType==RJSType_RDimArcLengthData::getIdStatic()) return true;
          
            if (otherType==RJSType_RDimDiametricData::getIdStatic()) return true;
          
            if (otherType==RJSType_RDimLinearData::getIdStatic()) return true;
          
            if (otherType==RJSType_RDimOrdinateData::getIdStatic()) return true;
          
            if (otherType==RJSType_RDimRadialData::getIdStatic()) return true;
          
            if (otherType==RJSType_RDimRotatedData::getIdStatic()) return true;
          

          return false;
      }
    
      int RJSType_RDimLinearData::id = -1;


      bool RJSType_RDimLinearData::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          
            if (otherType==RJSType_RDimAlignedData::getIdStatic()) return true;
          
            if (otherType==RJSType_RDimRotatedData::getIdStatic()) return true;
          

          return false;
      }
    
      int RJSType_RDirected::id = -1;


      bool RJSType_RDirected::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RDocument::id = -1;


      bool RJSType_RDocument::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RDocumentInterface::id = -1;


      bool RJSType_RDocumentInterface::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_REntityData::id = -1;


      bool RJSType_REntityData::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          
            if (otherType==RJSType_RArcData::getIdStatic()) return true;
          
            if (otherType==RJSType_RAttributeData::getIdStatic()) return true;
          
            if (otherType==RJSType_RBlockReferenceData::getIdStatic()) return true;
          
            if (otherType==RJSType_RCircleData::getIdStatic()) return true;
          
            if (otherType==RJSType_RDimAlignedData::getIdStatic()) return true;
          
            if (otherType==RJSType_RDimAngular2LData::getIdStatic()) return true;
          
            if (otherType==RJSType_RDimAngular3PData::getIdStatic()) return true;
          
            if (otherType==RJSType_RDimAngularData::getIdStatic()) return true;
          
            if (otherType==RJSType_RDimArcLengthData::getIdStatic()) return true;
          
            if (otherType==RJSType_RDimDiametricData::getIdStatic()) return true;
          
            if (otherType==RJSType_RDimLinearData::getIdStatic()) return true;
          
            if (otherType==RJSType_RDimOrdinateData::getIdStatic()) return true;
          
            if (otherType==RJSType_RDimRadialData::getIdStatic()) return true;
          
            if (otherType==RJSType_RDimRotatedData::getIdStatic()) return true;
          
            if (otherType==RJSType_RDimensionData::getIdStatic()) return true;
          
            if (otherType==RJSType_REllipseData::getIdStatic()) return true;
          
            if (otherType==RJSType_RHatchData::getIdStatic()) return true;
          
            if (otherType==RJSType_RImageData::getIdStatic()) return true;
          
            if (otherType==RJSType_RLeaderData::getIdStatic()) return true;
          
            if (otherType==RJSType_RLineData::getIdStatic()) return true;
          
            if (otherType==RJSType_RPointData::getIdStatic()) return true;
          
            if (otherType==RJSType_RPolylineData::getIdStatic()) return true;
          
            if (otherType==RJSType_RRayData::getIdStatic()) return true;
          
            if (otherType==RJSType_RSolidData::getIdStatic()) return true;
          
            if (otherType==RJSType_RSplineData::getIdStatic()) return true;
          
            if (otherType==RJSType_RTextBasedData::getIdStatic()) return true;
          
            if (otherType==RJSType_RTextData::getIdStatic()) return true;
          
            if (otherType==RJSType_RToleranceData::getIdStatic()) return true;
          
            if (otherType==RJSType_RViewportData::getIdStatic()) return true;
          
            if (otherType==RJSType_RXLineData::getIdStatic()) return true;
          

          return false;
      }
    
      int RJSType_REntityExportListener::id = -1;


      bool RJSType_REntityExportListener::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_REntityPickEvent::id = -1;


      bool RJSType_REntityPickEvent::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RExplodable::id = -1;


      bool RJSType_RExplodable::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          
            if (otherType==RJSType_RPolyline::getIdStatic()) return true;
          
            if (otherType==RJSType_RSpline::getIdStatic()) return true;
          
            if (otherType==RJSType_RTriangle::getIdStatic()) return true;
          

          return false;
      }
    
      int RJSType_RExportListener::id = -1;


      bool RJSType_RExportListener::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RExporter::id = -1;


      bool RJSType_RExporter::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          
            if (otherType==RJSType_RFileExporter::getIdStatic()) return true;
          
            if (otherType==RJSType_RFileExporterAdapter::getIdStatic()) return true;
          
            if (otherType==RJSType_RGraphicsScene::getIdStatic()) return true;
          
            if (otherType==RJSType_RGraphicsSceneQt::getIdStatic()) return true;
          

          return false;
      }
    
      int RJSType_RFileExporter::id = -1;


      bool RJSType_RFileExporter::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          
            if (otherType==RJSType_RFileExporterAdapter::getIdStatic()) return true;
          

          return false;
      }
    
      int RJSType_RFileExporterFactory::id = -1;


      bool RJSType_RFileExporterFactory::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          
            if (otherType==RJSType_RFileExporterFactoryAdapter::getIdStatic()) return true;
          

          return false;
      }
    
      int RJSType_RFileImporter::id = -1;


      bool RJSType_RFileImporter::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          
            if (otherType==RJSType_RFileImporterAdapter::getIdStatic()) return true;
          

          return false;
      }
    
      int RJSType_RFileImporterFactory::id = -1;


      bool RJSType_RFileImporterFactory::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          
            if (otherType==RJSType_RFileImporterFactoryAdapter::getIdStatic()) return true;
          

          return false;
      }
    
      int RJSType_RFocusListener::id = -1;


      bool RJSType_RFocusListener::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          
            if (otherType==RJSType_RFocusListenerAdapter::getIdStatic()) return true;
          
            if (otherType==RJSType_RGuiAction::getIdStatic()) return true;
          

          return false;
      }
    
      int RJSType_RGraphicsScene::id = -1;


      bool RJSType_RGraphicsScene::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          
            if (otherType==RJSType_RGraphicsSceneQt::getIdStatic()) return true;
          

          return false;
      }
    
      int RJSType_RGraphicsSceneQt::id = -1;


      bool RJSType_RGraphicsSceneQt::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RGraphicsView::id = -1;


      bool RJSType_RGraphicsView::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          
            if (otherType==RJSType_RGraphicsViewImage::getIdStatic()) return true;
          

          return false;
      }
    
      int RJSType_RGrid::id = -1;


      bool RJSType_RGrid::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          
            if (otherType==RJSType_ROrthoGrid::getIdStatic()) return true;
          

          return false;
      }
    
      int RJSType_RImportListener::id = -1;


      bool RJSType_RImportListener::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RImporter::id = -1;


      bool RJSType_RImporter::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          
            if (otherType==RJSType_RFileImporter::getIdStatic()) return true;
          
            if (otherType==RJSType_RFileImporterAdapter::getIdStatic()) return true;
          

          return false;
      }
    
      int RJSType_RInputEvent::id = -1;


      bool RJSType_RInputEvent::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          
            if (otherType==RJSType_RCoordinateEvent::getIdStatic()) return true;
          
            if (otherType==RJSType_REntityPickEvent::getIdStatic()) return true;
          
            if (otherType==RJSType_RMouseEvent::getIdStatic()) return true;
          
            if (otherType==RJSType_RWheelEvent::getIdStatic()) return true;
          

          return false;
      }
    
      int RJSType_RInterTransactionListener::id = -1;


      bool RJSType_RInterTransactionListener::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          
            if (otherType==RJSType_RInterTransactionListenerAdapter::getIdStatic()) return true;
          

          return false;
      }
    
      int RJSType_RKeyListener::id = -1;


      bool RJSType_RKeyListener::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          
            if (otherType==RJSType_RKeyListenerAdapter::getIdStatic()) return true;
          

          return false;
      }
    
      int RJSType_RLayerListener::id = -1;


      bool RJSType_RLayerListener::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          
            if (otherType==RJSType_RLayerListenerAdapter::getIdStatic()) return true;
          
            if (otherType==RJSType_RPropertyEditor::getIdStatic()) return true;
          

          return false;
      }
    
      int RJSType_RMainWindow::id = -1;


      bool RJSType_RMainWindow::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          
            if (otherType==RJSType_RMainWindowQt::getIdStatic()) return true;
          

          return false;
      }
    
      int RJSType_RMemoryStorage::id = -1;


      bool RJSType_RMemoryStorage::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RMessageHandler::id = -1;


      bool RJSType_RMessageHandler::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RMixedOperation::id = -1;


      bool RJSType_RMixedOperation::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RModifiedListener::id = -1;


      bool RJSType_RModifiedListener::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          
            if (otherType==RJSType_RMdiChildQt::getIdStatic()) return true;
          

          return false;
      }
    
      int RJSType_RModifyObjectOperation::id = -1;


      bool RJSType_RModifyObjectOperation::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RModifyObjectsOperation::id = -1;


      bool RJSType_RModifyObjectsOperation::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RMouseEvent::id = -1;


      bool RJSType_RMouseEvent::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RMoveReferencePointOperation::id = -1;


      bool RJSType_RMoveReferencePointOperation::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RMoveSelectionOperation::id = -1;


      bool RJSType_RMoveSelectionOperation::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RNewDocumentListener::id = -1;


      bool RJSType_RNewDocumentListener::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_ROperation::id = -1;


      bool RJSType_ROperation::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          
            if (otherType==RJSType_RAddObjectOperation::getIdStatic()) return true;
          
            if (otherType==RJSType_RAddObjectsOperation::getIdStatic()) return true;
          
            if (otherType==RJSType_RChangePropertyOperation::getIdStatic()) return true;
          
            if (otherType==RJSType_RClickReferencePointOperation::getIdStatic()) return true;
          
            if (otherType==RJSType_RClipboardOperation::getIdStatic()) return true;
          
            if (otherType==RJSType_RCopyOperation::getIdStatic()) return true;
          
            if (otherType==RJSType_RDeleteAllEntitiesOperation::getIdStatic()) return true;
          
            if (otherType==RJSType_RDeleteObjectOperation::getIdStatic()) return true;
          
            if (otherType==RJSType_RDeleteObjectsOperation::getIdStatic()) return true;
          
            if (otherType==RJSType_RDeleteSelectionOperation::getIdStatic()) return true;
          
            if (otherType==RJSType_RMixedOperation::getIdStatic()) return true;
          
            if (otherType==RJSType_RModifyObjectOperation::getIdStatic()) return true;
          
            if (otherType==RJSType_RModifyObjectsOperation::getIdStatic()) return true;
          
            if (otherType==RJSType_RMoveReferencePointOperation::getIdStatic()) return true;
          
            if (otherType==RJSType_RMoveSelectionOperation::getIdStatic()) return true;
          
            if (otherType==RJSType_RPasteOperation::getIdStatic()) return true;
          
            if (otherType==RJSType_RScaleSelectionOperation::getIdStatic()) return true;
          

          return false;
      }
    
      int RJSType_ROperationUtils::id = -1;


      bool RJSType_ROperationUtils::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_ROrthoGrid::id = -1;


      bool RJSType_ROrthoGrid::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RPaletteListener::id = -1;


      bool RJSType_RPaletteListener::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          
            if (otherType==RJSType_RPaletteListenerAdapter::getIdStatic()) return true;
          
            if (otherType==RJSType_RRulerQt::getIdStatic()) return true;
          

          return false;
      }
    
      int RJSType_RPasteOperation::id = -1;


      bool RJSType_RPasteOperation::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RPenListener::id = -1;


      bool RJSType_RPenListener::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          
            if (otherType==RJSType_RPenListenerAdapter::getIdStatic()) return true;
          

          return false;
      }
    
      int RJSType_RPluginInterface::id = -1;


      bool RJSType_RPluginInterface::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RPreferencesListener::id = -1;


      bool RJSType_RPreferencesListener::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          
            if (otherType==RJSType_RPreferencesListenerAdapter::getIdStatic()) return true;
          

          return false;
      }
    
      int RJSType_RProgressHandler::id = -1;


      bool RJSType_RProgressHandler::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RPropertyEvent::id = -1;


      bool RJSType_RPropertyEvent::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RPropertyListener::id = -1;


      bool RJSType_RPropertyListener::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          
            if (otherType==RJSType_RPropertyEditor::getIdStatic()) return true;
          
            if (otherType==RJSType_RPropertyListenerAdapter::getIdStatic()) return true;
          

          return false;
      }
    
      int RJSType_RRestrictAngleLength::id = -1;


      bool RJSType_RRestrictAngleLength::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RRestrictHorizontal::id = -1;


      bool RJSType_RRestrictHorizontal::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RRestrictOff::id = -1;


      bool RJSType_RRestrictOff::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RRestrictOrthogonal::id = -1;


      bool RJSType_RRestrictOrthogonal::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          
            if (otherType==RJSType_RRestrictHorizontal::getIdStatic()) return true;
          
            if (otherType==RJSType_RRestrictVertical::getIdStatic()) return true;
          

          return false;
      }
    
      int RJSType_RRestrictVertical::id = -1;


      bool RJSType_RRestrictVertical::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RRuler::id = -1;


      bool RJSType_RRuler::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          
            if (otherType==RJSType_RRulerQt::getIdStatic()) return true;
          

          return false;
      }
    
      int RJSType_RScaleSelectionOperation::id = -1;


      bool RJSType_RScaleSelectionOperation::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RSelectionListener::id = -1;


      bool RJSType_RSelectionListener::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          
            if (otherType==RJSType_RGuiAction::getIdStatic()) return true;
          
            if (otherType==RJSType_RSelectionListenerAdapter::getIdStatic()) return true;
          

          return false;
      }
    
      int RJSType_RSnap::id = -1;


      bool RJSType_RSnap::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          
            if (otherType==RJSType_RSnapAuto::getIdStatic()) return true;
          
            if (otherType==RJSType_RSnapCenter::getIdStatic()) return true;
          
            if (otherType==RJSType_RSnapDistance::getIdStatic()) return true;
          
            if (otherType==RJSType_RSnapEnd::getIdStatic()) return true;
          
            if (otherType==RJSType_RSnapEntityBase::getIdStatic()) return true;
          
            if (otherType==RJSType_RSnapFree::getIdStatic()) return true;
          
            if (otherType==RJSType_RSnapGrid::getIdStatic()) return true;
          
            if (otherType==RJSType_RSnapIntersection::getIdStatic()) return true;
          
            if (otherType==RJSType_RSnapMiddle::getIdStatic()) return true;
          
            if (otherType==RJSType_RSnapOnEntity::getIdStatic()) return true;
          
            if (otherType==RJSType_RSnapPerpendicular::getIdStatic()) return true;
          
            if (otherType==RJSType_RSnapReference::getIdStatic()) return true;
          
            if (otherType==RJSType_RSnapTangential::getIdStatic()) return true;
          

          return false;
      }
    
      int RJSType_RSnapAuto::id = -1;


      bool RJSType_RSnapAuto::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RSnapCenter::id = -1;


      bool RJSType_RSnapCenter::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RSnapDistance::id = -1;


      bool RJSType_RSnapDistance::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RSnapEnd::id = -1;


      bool RJSType_RSnapEnd::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RSnapEntityBase::id = -1;


      bool RJSType_RSnapEntityBase::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          
            if (otherType==RJSType_RSnapCenter::getIdStatic()) return true;
          
            if (otherType==RJSType_RSnapDistance::getIdStatic()) return true;
          
            if (otherType==RJSType_RSnapEnd::getIdStatic()) return true;
          
            if (otherType==RJSType_RSnapMiddle::getIdStatic()) return true;
          
            if (otherType==RJSType_RSnapOnEntity::getIdStatic()) return true;
          
            if (otherType==RJSType_RSnapPerpendicular::getIdStatic()) return true;
          
            if (otherType==RJSType_RSnapReference::getIdStatic()) return true;
          
            if (otherType==RJSType_RSnapTangential::getIdStatic()) return true;
          

          return false;
      }
    
      int RJSType_RSnapFree::id = -1;


      bool RJSType_RSnapFree::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RSnapGrid::id = -1;


      bool RJSType_RSnapGrid::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RSnapIntersection::id = -1;


      bool RJSType_RSnapIntersection::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RSnapListener::id = -1;


      bool RJSType_RSnapListener::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RSnapMiddle::id = -1;


      bool RJSType_RSnapMiddle::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RSnapOnEntity::id = -1;


      bool RJSType_RSnapOnEntity::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RSnapPerpendicular::id = -1;


      bool RJSType_RSnapPerpendicular::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RSnapReference::id = -1;


      bool RJSType_RSnapReference::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RSnapRestriction::id = -1;


      bool RJSType_RSnapRestriction::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          
            if (otherType==RJSType_RRestrictAngleLength::getIdStatic()) return true;
          
            if (otherType==RJSType_RRestrictHorizontal::getIdStatic()) return true;
          
            if (otherType==RJSType_RRestrictOff::getIdStatic()) return true;
          
            if (otherType==RJSType_RRestrictOrthogonal::getIdStatic()) return true;
          
            if (otherType==RJSType_RRestrictVertical::getIdStatic()) return true;
          

          return false;
      }
    
      int RJSType_RSnapTangential::id = -1;


      bool RJSType_RSnapTangential::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RSpatialIndex::id = -1;


      bool RJSType_RSpatialIndex::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          
            if (otherType==RJSType_RSpatialIndexNavel::getIdStatic()) return true;
          
            if (otherType==RJSType_RSpatialIndexSimple::getIdStatic()) return true;
          

          return false;
      }
    
      int RJSType_RSpatialIndexSimple::id = -1;


      bool RJSType_RSpatialIndexSimple::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RSpatialIndexVisitor::id = -1;


      bool RJSType_RSpatialIndexVisitor::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          
            if (otherType==RJSType_RSpatialIndexVisitorAdapter::getIdStatic()) return true;
          

          return false;
      }
    
      int RJSType_RStorage::id = -1;


      bool RJSType_RStorage::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          
            if (otherType==RJSType_RMemoryStorage::getIdStatic()) return true;
          

          return false;
      }
    
      int RJSType_RTabletEvent::id = -1;


      bool RJSType_RTabletEvent::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RTerminateEvent::id = -1;


      bool RJSType_RTerminateEvent::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RTextRenderer::id = -1;


      bool RJSType_RTextRenderer::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RTransactionListener::id = -1;


      bool RJSType_RTransactionListener::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          
            if (otherType==RJSType_RGuiAction::getIdStatic()) return true;
          
            if (otherType==RJSType_RTransactionListenerAdapter::getIdStatic()) return true;
          

          return false;
      }
    
      int RJSType_RTransactionStack::id = -1;


      bool RJSType_RTransactionStack::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RTransformation::id = -1;


      bool RJSType_RTransformation::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          
            if (otherType==RJSType_RTranslation::getIdStatic()) return true;
          

          return false;
      }
    
      int RJSType_RTranslation::id = -1;


      bool RJSType_RTranslation::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RUcsListener::id = -1;


      bool RJSType_RUcsListener::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RViewFocusListener::id = -1;


      bool RJSType_RViewFocusListener::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          
            if (otherType==RJSType_RViewFocusListenerAdapter::getIdStatic()) return true;
          

          return false;
      }
    
      int RJSType_RViewListener::id = -1;


      bool RJSType_RViewListener::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          
            if (otherType==RJSType_RViewListenerAdapter::getIdStatic()) return true;
          

          return false;
      }
    
      int RJSType_RWheelEvent::id = -1;


      bool RJSType_RWheelEvent::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    

  
      int RJSType_RBlockListenerAdapter::id = -1;


      bool RJSType_RBlockListenerAdapter::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RCadToolBar::id = -1;


      bool RJSType_RCadToolBar::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RCadToolBarPanel::id = -1;


      bool RJSType_RCadToolBarPanel::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RCharacterWidget::id = -1;


      bool RJSType_RCharacterWidget::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RColorCombo::id = -1;


      bool RJSType_RColorCombo::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RCommandLine::id = -1;


      bool RJSType_RCommandLine::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RCoordinateListenerAdapter::id = -1;


      bool RJSType_RCoordinateListenerAdapter::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RDockWidget::id = -1;


      bool RJSType_RDockWidget::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_REventFilter::id = -1;


      bool RJSType_REventFilter::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_REventHandler::id = -1;


      bool RJSType_REventHandler::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RFileSystemModel::id = -1;


      bool RJSType_RFileSystemModel::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RFlowLayout::id = -1;


      bool RJSType_RFlowLayout::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RFocusListenerAdapter::id = -1;


      bool RJSType_RFocusListenerAdapter::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RFontChooserWidget::id = -1;


      bool RJSType_RFontChooserWidget::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RGraphicsViewQt::id = -1;


      bool RJSType_RGraphicsViewQt::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RGraphicsViewImage::id = -1;


      bool RJSType_RGraphicsViewImage::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RGuiAction::id = -1;


      bool RJSType_RGuiAction::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RInterTransactionListenerAdapter::id = -1;


      bool RJSType_RInterTransactionListenerAdapter::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RKeyListenerAdapter::id = -1;


      bool RJSType_RKeyListenerAdapter::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RLayerListenerAdapter::id = -1;


      bool RJSType_RLayerListenerAdapter::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RLinetypeCombo::id = -1;


      bool RJSType_RLinetypeCombo::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RLineweightCombo::id = -1;


      bool RJSType_RLineweightCombo::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RListView::id = -1;


      bool RJSType_RListView::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RListWidget::id = -1;


      bool RJSType_RListWidget::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RMainWindowQt::id = -1;


      bool RJSType_RMainWindowQt::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RMathComboBox::id = -1;


      bool RJSType_RMathComboBox::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RMathLineEdit::id = -1;


      bool RJSType_RMathLineEdit::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RMdiArea::id = -1;


      bool RJSType_RMdiArea::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RMdiChildQt::id = -1;


      bool RJSType_RMdiChildQt::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RPaletteListenerAdapter::id = -1;


      bool RJSType_RPaletteListenerAdapter::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RPenListenerAdapter::id = -1;


      bool RJSType_RPenListenerAdapter::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RPreferencesListenerAdapter::id = -1;


      bool RJSType_RPreferencesListenerAdapter::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RPropertyListenerAdapter::id = -1;


      bool RJSType_RPropertyListenerAdapter::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RRulerQt::id = -1;


      bool RJSType_RRulerQt::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RSelectionListenerAdapter::id = -1;


      bool RJSType_RSelectionListenerAdapter::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RSingleApplication::id = -1;


      bool RJSType_RSingleApplication::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RTextEdit::id = -1;


      bool RJSType_RTextEdit::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RToolButton::id = -1;


      bool RJSType_RToolButton::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RToolMatrixItemDelegate::id = -1;


      bool RJSType_RToolMatrixItemDelegate::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RTransactionListenerAdapter::id = -1;


      bool RJSType_RTransactionListenerAdapter::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RTreeWidget::id = -1;


      bool RJSType_RTreeWidget::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RViewListenerAdapter::id = -1;


      bool RJSType_RViewListenerAdapter::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          

          return false;
      }
    
      int RJSType_RWidget::id = -1;


      bool RJSType_RWidget::isOfType(int otherType) {
          if (otherType==getIdStatic()) return true;

          // check for derived types:
          
            if (otherType==RJSType_RCadToolBarPanel::getIdStatic()) return true;
          

          return false;
      }
    

  

  

  

  

  

  

  

  

