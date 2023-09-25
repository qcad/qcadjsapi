
  // Automatically generated, do not edit
  
          #ifndef RJSHELPER_QCAD_H
          #define RJSHELPER_QCAD_H

          #include "RJSHelper_qcad_headers.h"
        

      #include <QtCore>
      #include <QtGui>
      #include <QtWidgets>
      #include <QtXml>
      #include <QtQuick>
      #include <QtQuickWidgets>
      #include <QtPrintSupport>
      #include <QtCore5Compat>
      #include <QtSvg>
      #include <QtUiTools>


      #include "RJSWrapper.h"

      



      class RJSHelper_qcad {

      public:
        
          static void registerDowncasters();
        
  // ----------------
  // primitive types:
  // ----------------
  
      static QJSValue cpp2js_RAddObjectsOperation_Flags(RJSApi& handler, RAddObjectsOperation::Flags v);
      static RAddObjectsOperation::Flags js2cpp_RAddObjectsOperation_Flags(RJSApi& handler, const QJSValue& v);
      static bool is_RAddObjectsOperation_Flags(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RRefPoint_Flags(RJSApi& handler, RRefPoint::Flags v);
      static RRefPoint::Flags js2cpp_RRefPoint_Flags(RJSApi& handler, const QJSValue& v);
      static bool is_RRefPoint_Flags(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RSnapAuto_Modes(RJSApi& handler, RSnapAuto::Modes v);
      static RSnapAuto::Modes js2cpp_RSnapAuto_Modes(RJSApi& handler, const QJSValue& v);
      static bool is_RSnapAuto_Modes(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RAction_ClickMode(RJSApi& handler, RAction::ClickMode v);
      static RAction::ClickMode js2cpp_RAction_ClickMode(RJSApi& handler, const QJSValue& v);
      static bool is_RAction_ClickMode(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RAddObjectsOperation_Flag(RJSApi& handler, RAddObjectsOperation::Flag v);
      static RAddObjectsOperation::Flag js2cpp_RAddObjectsOperation_Flag(RJSApi& handler, const QJSValue& v);
      static bool is_RAddObjectsOperation_Flag(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RArcEntity_Id(RJSApi& handler, RArcEntity::Id v);
      static RArcEntity::Id js2cpp_RArcEntity_Id(RJSApi& handler, const QJSValue& v);
      static bool is_RArcEntity_Id(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RAttributeDefinitionEntity_Id(RJSApi& handler, RAttributeDefinitionEntity::Id v);
      static RAttributeDefinitionEntity::Id js2cpp_RAttributeDefinitionEntity_Id(RJSApi& handler, const QJSValue& v);
      static bool is_RAttributeDefinitionEntity_Id(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RAttributeEntity_Id(RJSApi& handler, RAttributeEntity::Id v);
      static RAttributeEntity::Id js2cpp_RAttributeEntity_Id(RJSApi& handler, const QJSValue& v);
      static bool is_RAttributeEntity_Id(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RBlock_Handle(RJSApi& handler, RBlock::Handle v);
      static RBlock::Handle js2cpp_RBlock_Handle(RJSApi& handler, const QJSValue& v);
      static bool is_RBlock_Handle(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RBlock_Id(RJSApi& handler, RBlock::Id v);
      static RBlock::Id js2cpp_RBlock_Id(RJSApi& handler, const QJSValue& v);
      static bool is_RBlock_Id(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RBlockReferenceEntity_Id(RJSApi& handler, RBlockReferenceEntity::Id v);
      static RBlockReferenceEntity::Id js2cpp_RBlockReferenceEntity_Id(RJSApi& handler, const QJSValue& v);
      static bool is_RBlockReferenceEntity_Id(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RCircleEntity_Id(RJSApi& handler, RCircleEntity::Id v);
      static RCircleEntity::Id js2cpp_RCircleEntity_Id(RJSApi& handler, const QJSValue& v);
      static bool is_RCircleEntity_Id(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RColor_Mode(RJSApi& handler, RColor::Mode v);
      static RColor::Mode js2cpp_RColor_Mode(RJSApi& handler, const QJSValue& v);
      static bool is_RColor_Mode(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RDimAlignedEntity_Id(RJSApi& handler, RDimAlignedEntity::Id v);
      static RDimAlignedEntity::Id js2cpp_RDimAlignedEntity_Id(RJSApi& handler, const QJSValue& v);
      static bool is_RDimAlignedEntity_Id(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RDimAngular2LEntity_Id(RJSApi& handler, RDimAngular2LEntity::Id v);
      static RDimAngular2LEntity::Id js2cpp_RDimAngular2LEntity_Id(RJSApi& handler, const QJSValue& v);
      static bool is_RDimAngular2LEntity_Id(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RDimAngular3PEntity_Id(RJSApi& handler, RDimAngular3PEntity::Id v);
      static RDimAngular3PEntity::Id js2cpp_RDimAngular3PEntity_Id(RJSApi& handler, const QJSValue& v);
      static bool is_RDimAngular3PEntity_Id(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RDimAngularEntity_Id(RJSApi& handler, RDimAngularEntity::Id v);
      static RDimAngularEntity::Id js2cpp_RDimAngularEntity_Id(RJSApi& handler, const QJSValue& v);
      static bool is_RDimAngularEntity_Id(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RDimArcLengthEntity_Id(RJSApi& handler, RDimArcLengthEntity::Id v);
      static RDimArcLengthEntity::Id js2cpp_RDimArcLengthEntity_Id(RJSApi& handler, const QJSValue& v);
      static bool is_RDimArcLengthEntity_Id(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RDimDiametricEntity_Id(RJSApi& handler, RDimDiametricEntity::Id v);
      static RDimDiametricEntity::Id js2cpp_RDimDiametricEntity_Id(RJSApi& handler, const QJSValue& v);
      static bool is_RDimDiametricEntity_Id(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RDimLinearEntity_Id(RJSApi& handler, RDimLinearEntity::Id v);
      static RDimLinearEntity::Id js2cpp_RDimLinearEntity_Id(RJSApi& handler, const QJSValue& v);
      static bool is_RDimLinearEntity_Id(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RDimOrdinateEntity_Id(RJSApi& handler, RDimOrdinateEntity::Id v);
      static RDimOrdinateEntity::Id js2cpp_RDimOrdinateEntity_Id(RJSApi& handler, const QJSValue& v);
      static bool is_RDimOrdinateEntity_Id(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RDimRadialEntity_Id(RJSApi& handler, RDimRadialEntity::Id v);
      static RDimRadialEntity::Id js2cpp_RDimRadialEntity_Id(RJSApi& handler, const QJSValue& v);
      static bool is_RDimRadialEntity_Id(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RDimRotatedEntity_Id(RJSApi& handler, RDimRotatedEntity::Id v);
      static RDimRotatedEntity::Id js2cpp_RDimRotatedEntity_Id(RJSApi& handler, const QJSValue& v);
      static bool is_RDimRotatedEntity_Id(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RDimensionEntity_Id(RJSApi& handler, RDimensionEntity::Id v);
      static RDimensionEntity::Id js2cpp_RDimensionEntity_Id(RJSApi& handler, const QJSValue& v);
      static bool is_RDimensionEntity_Id(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RDocumentInterface_IoErrorCode(RJSApi& handler, RDocumentInterface::IoErrorCode v);
      static RDocumentInterface::IoErrorCode js2cpp_RDocumentInterface_IoErrorCode(RJSApi& handler, const QJSValue& v);
      static bool is_RDocumentInterface_IoErrorCode(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RDxfServices_Type(RJSApi& handler, RDxfServices::Type v);
      static RDxfServices::Type js2cpp_RDxfServices_Type(RJSApi& handler, const QJSValue& v);
      static bool is_RDxfServices_Type(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_REllipseEntity_Id(RJSApi& handler, REllipseEntity::Id v);
      static REllipseEntity::Id js2cpp_REllipseEntity_Id(RJSApi& handler, const QJSValue& v);
      static bool is_REllipseEntity_Id(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_REntity_Id(RJSApi& handler, REntity::Id v);
      static REntity::Id js2cpp_REntity_Id(RJSApi& handler, const QJSValue& v);
      static bool is_REntity_Id(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RFaceEntity_Id(RJSApi& handler, RFaceEntity::Id v);
      static RFaceEntity::Id js2cpp_RFaceEntity_Id(RJSApi& handler, const QJSValue& v);
      static bool is_RFaceEntity_Id(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RGraphicsSceneDrawable_Mode(RJSApi& handler, RGraphicsSceneDrawable::Mode v);
      static RGraphicsSceneDrawable::Mode js2cpp_RGraphicsSceneDrawable_Mode(RJSApi& handler, const QJSValue& v);
      static bool is_RGraphicsSceneDrawable_Mode(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RGraphicsSceneDrawable_Type(RJSApi& handler, RGraphicsSceneDrawable::Type v);
      static RGraphicsSceneDrawable::Type js2cpp_RGraphicsSceneDrawable_Type(RJSApi& handler, const QJSValue& v);
      static bool is_RGraphicsSceneDrawable_Type(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RGraphicsView_ColorMode(RJSApi& handler, RGraphicsView::ColorMode v);
      static RGraphicsView::ColorMode js2cpp_RGraphicsView_ColorMode(RJSApi& handler, const QJSValue& v);
      static bool is_RGraphicsView_ColorMode(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RHatchEntity_Id(RJSApi& handler, RHatchEntity::Id v);
      static RHatchEntity::Id js2cpp_RHatchEntity_Id(RJSApi& handler, const QJSValue& v);
      static bool is_RHatchEntity_Id(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RImageEntity_Id(RJSApi& handler, RImageEntity::Id v);
      static RImageEntity::Id js2cpp_RImageEntity_Id(RJSApi& handler, const QJSValue& v);
      static bool is_RImageEntity_Id(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RLayer_Id(RJSApi& handler, RLayer::Id v);
      static RLayer::Id js2cpp_RLayer_Id(RJSApi& handler, const QJSValue& v);
      static bool is_RLayer_Id(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RLayerState_Id(RJSApi& handler, RLayerState::Id v);
      static RLayerState::Id js2cpp_RLayerState_Id(RJSApi& handler, const QJSValue& v);
      static bool is_RLayerState_Id(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RLayout_Id(RJSApi& handler, RLayout::Id v);
      static RLayout::Id js2cpp_RLayout_Id(RJSApi& handler, const QJSValue& v);
      static bool is_RLayout_Id(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RLayout_PlotPaperUnits(RJSApi& handler, RLayout::PlotPaperUnits v);
      static RLayout::PlotPaperUnits js2cpp_RLayout_PlotPaperUnits(RJSApi& handler, const QJSValue& v);
      static bool is_RLayout_PlotPaperUnits(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RLayout_PlotRotation(RJSApi& handler, RLayout::PlotRotation v);
      static RLayout::PlotRotation js2cpp_RLayout_PlotRotation(RJSApi& handler, const QJSValue& v);
      static bool is_RLayout_PlotRotation(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RLayout_PlotType(RJSApi& handler, RLayout::PlotType v);
      static RLayout::PlotType js2cpp_RLayout_PlotType(RJSApi& handler, const QJSValue& v);
      static bool is_RLayout_PlotType(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RLayout_StandardScaleType(RJSApi& handler, RLayout::StandardScaleType v);
      static RLayout::StandardScaleType js2cpp_RLayout_StandardScaleType(RJSApi& handler, const QJSValue& v);
      static bool is_RLayout_StandardScaleType(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RLeaderEntity_Id(RJSApi& handler, RLeaderEntity::Id v);
      static RLeaderEntity::Id js2cpp_RLeaderEntity_Id(RJSApi& handler, const QJSValue& v);
      static bool is_RLeaderEntity_Id(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RLineEntity_Id(RJSApi& handler, RLineEntity::Id v);
      static RLineEntity::Id js2cpp_RLineEntity_Id(RJSApi& handler, const QJSValue& v);
      static bool is_RLineEntity_Id(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RLinetype_Id(RJSApi& handler, RLinetype::Id v);
      static RLinetype::Id js2cpp_RLinetype_Id(RJSApi& handler, const QJSValue& v);
      static bool is_RLinetype_Id(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RLineweight_Lineweight(RJSApi& handler, RLineweight::Lineweight v);
      static RLineweight::Lineweight js2cpp_RLineweight_Lineweight(RJSApi& handler, const QJSValue& v);
      static bool is_RLineweight_Lineweight(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RObject_Handle(RJSApi& handler, RObject::Handle v);
      static RObject::Handle js2cpp_RObject_Handle(RJSApi& handler, const QJSValue& v);
      static bool is_RObject_Handle(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RObject_Id(RJSApi& handler, RObject::Id v);
      static RObject::Id js2cpp_RObject_Id(RJSApi& handler, const QJSValue& v);
      static bool is_RObject_Id(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RObject_XYZ(RJSApi& handler, RObject::XYZ v);
      static RObject::XYZ js2cpp_RObject_XYZ(RJSApi& handler, const QJSValue& v);
      static bool is_RObject_XYZ(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RPainterPath_Mode(RJSApi& handler, RPainterPath::Mode v);
      static RPainterPath::Mode js2cpp_RPainterPath_Mode(RJSApi& handler, const QJSValue& v);
      static bool is_RPainterPath_Mode(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RPluginInterface_InitStatus(RJSApi& handler, RPluginInterface::InitStatus v);
      static RPluginInterface::InitStatus js2cpp_RPluginInterface_InitStatus(RJSApi& handler, const QJSValue& v);
      static bool is_RPluginInterface_InitStatus(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RPointEntity_Id(RJSApi& handler, RPointEntity::Id v);
      static RPointEntity::Id js2cpp_RPointEntity_Id(RJSApi& handler, const QJSValue& v);
      static bool is_RPointEntity_Id(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RPolylineEntity_Id(RJSApi& handler, RPolylineEntity::Id v);
      static RPolylineEntity::Id js2cpp_RPolylineEntity_Id(RJSApi& handler, const QJSValue& v);
      static bool is_RPolylineEntity_Id(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RPropertyAttributes_Option(RJSApi& handler, RPropertyAttributes::Option v);
      static RPropertyAttributes::Option js2cpp_RPropertyAttributes_Option(RJSApi& handler, const QJSValue& v);
      static bool is_RPropertyAttributes_Option(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RPropertyAttributes_Options(RJSApi& handler, RPropertyAttributes::Options v);
      static RPropertyAttributes::Options js2cpp_RPropertyAttributes_Options(RJSApi& handler, const QJSValue& v);
      static bool is_RPropertyAttributes_Options(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RRayEntity_Id(RJSApi& handler, RRayEntity::Id v);
      static RRayEntity::Id js2cpp_RRayEntity_Id(RJSApi& handler, const QJSValue& v);
      static bool is_RRayEntity_Id(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RRefPoint_Flag(RJSApi& handler, RRefPoint::Flag v);
      static RRefPoint::Flag js2cpp_RRefPoint_Flag(RJSApi& handler, const QJSValue& v);
      static bool is_RRefPoint_Flag(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RS_AngleFormat(RJSApi& handler, RS::AngleFormat v);
      static RS::AngleFormat js2cpp_RS_AngleFormat(RJSApi& handler, const QJSValue& v);
      static bool is_RS_AngleFormat(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RS_Easing(RJSApi& handler, RS::Easing v);
      static RS::Easing js2cpp_RS_Easing(RJSApi& handler, const QJSValue& v);
      static bool is_RS_Easing(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RS_Ending(RJSApi& handler, RS::Ending v);
      static RS::Ending js2cpp_RS_Ending(RJSApi& handler, const QJSValue& v);
      static bool is_RS_Ending(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RS_EntityType(RJSApi& handler, RS::EntityType v);
      static RS::EntityType js2cpp_RS_EntityType(RJSApi& handler, const QJSValue& v);
      static bool is_RS_EntityType(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RS_From(RJSApi& handler, RS::From v);
      static RS::From js2cpp_RS_From(RJSApi& handler, const QJSValue& v);
      static bool is_RS_From(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RS_HAlign(RJSApi& handler, RS::HAlign v);
      static RS::HAlign js2cpp_RS_HAlign(RJSApi& handler, const QJSValue& v);
      static bool is_RS_HAlign(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RS_IsoProjectionType(RJSApi& handler, RS::IsoProjectionType v);
      static RS::IsoProjectionType js2cpp_RS_IsoProjectionType(RJSApi& handler, const QJSValue& v);
      static bool is_RS_IsoProjectionType(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RS_JoinType(RJSApi& handler, RS::JoinType v);
      static RS::JoinType js2cpp_RS_JoinType(RJSApi& handler, const QJSValue& v);
      static bool is_RS_JoinType(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RS_KnownVariable(RJSApi& handler, RS::KnownVariable v);
      static RS::KnownVariable js2cpp_RS_KnownVariable(RJSApi& handler, const QJSValue& v);
      static bool is_RS_KnownVariable(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RS_KnownVariableType(RJSApi& handler, RS::KnownVariableType v);
      static RS::KnownVariableType js2cpp_RS_KnownVariableType(RJSApi& handler, const QJSValue& v);
      static bool is_RS_KnownVariableType(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RS_LinearFormat(RJSApi& handler, RS::LinearFormat v);
      static RS::LinearFormat js2cpp_RS_LinearFormat(RJSApi& handler, const QJSValue& v);
      static bool is_RS_LinearFormat(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RS_Measurement(RJSApi& handler, RS::Measurement v);
      static RS::Measurement js2cpp_RS_Measurement(RJSApi& handler, const QJSValue& v);
      static bool is_RS_Measurement(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RS_MetaType(RJSApi& handler, RS::MetaType v);
      static RS::MetaType js2cpp_RS_MetaType(RJSApi& handler, const QJSValue& v);
      static bool is_RS_MetaType(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RS_Orientation(RJSApi& handler, RS::Orientation v);
      static RS::Orientation js2cpp_RS_Orientation(RJSApi& handler, const QJSValue& v);
      static bool is_RS_Orientation(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RS_OrthoMode(RJSApi& handler, RS::OrthoMode v);
      static RS::OrthoMode js2cpp_RS_OrthoMode(RJSApi& handler, const QJSValue& v);
      static bool is_RS_OrthoMode(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RS_ProjectionRenderingHint(RJSApi& handler, RS::ProjectionRenderingHint v);
      static RS::ProjectionRenderingHint js2cpp_RS_ProjectionRenderingHint(RJSApi& handler, const QJSValue& v);
      static bool is_RS_ProjectionRenderingHint(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RS_Side(RJSApi& handler, RS::Side v);
      static RS::Side js2cpp_RS_Side(RJSApi& handler, const QJSValue& v);
      static bool is_RS_Side(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RS_TextDrawingDirection(RJSApi& handler, RS::TextDrawingDirection v);
      static RS::TextDrawingDirection js2cpp_RS_TextDrawingDirection(RJSApi& handler, const QJSValue& v);
      static bool is_RS_TextDrawingDirection(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RS_TextLineSpacingStyle(RJSApi& handler, RS::TextLineSpacingStyle v);
      static RS::TextLineSpacingStyle js2cpp_RS_TextLineSpacingStyle(RJSApi& handler, const QJSValue& v);
      static bool is_RS_TextLineSpacingStyle(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RS_Unit(RJSApi& handler, RS::Unit v);
      static RS::Unit js2cpp_RS_Unit(RJSApi& handler, const QJSValue& v);
      static bool is_RS_Unit(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RS_VAlign(RJSApi& handler, RS::VAlign v);
      static RS::VAlign js2cpp_RS_VAlign(RJSApi& handler, const QJSValue& v);
      static bool is_RS_VAlign(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RShape_Type(RJSApi& handler, RShape::Type v);
      static RShape::Type js2cpp_RShape_Type(RJSApi& handler, const QJSValue& v);
      static bool is_RShape_Type(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RSnap_Status(RJSApi& handler, RSnap::Status v);
      static RSnap::Status js2cpp_RSnap_Status(RJSApi& handler, const QJSValue& v);
      static bool is_RSnap_Status(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RSnapAuto_Mode(RJSApi& handler, RSnapAuto::Mode v);
      static RSnapAuto::Mode js2cpp_RSnapAuto_Mode(RJSApi& handler, const QJSValue& v);
      static bool is_RSnapAuto_Mode(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RSolidEntity_Id(RJSApi& handler, RSolidEntity::Id v);
      static RSolidEntity::Id js2cpp_RSolidEntity_Id(RJSApi& handler, const QJSValue& v);
      static bool is_RSolidEntity_Id(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RSplineEntity_Id(RJSApi& handler, RSplineEntity::Id v);
      static RSplineEntity::Id js2cpp_RSplineEntity_Id(RJSApi& handler, const QJSValue& v);
      static bool is_RSplineEntity_Id(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RTextBasedData_TextFlag(RJSApi& handler, RTextBasedData::TextFlag v);
      static RTextBasedData::TextFlag js2cpp_RTextBasedData_TextFlag(RJSApi& handler, const QJSValue& v);
      static bool is_RTextBasedData_TextFlag(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RTextBasedEntity_Id(RJSApi& handler, RTextBasedEntity::Id v);
      static RTextBasedEntity::Id js2cpp_RTextBasedEntity_Id(RJSApi& handler, const QJSValue& v);
      static bool is_RTextBasedEntity_Id(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RTextEntity_Id(RJSApi& handler, RTextEntity::Id v);
      static RTextEntity::Id js2cpp_RTextEntity_Id(RJSApi& handler, const QJSValue& v);
      static bool is_RTextEntity_Id(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RTextRenderer_Target(RJSApi& handler, RTextRenderer::Target v);
      static RTextRenderer::Target js2cpp_RTextRenderer_Target(RJSApi& handler, const QJSValue& v);
      static bool is_RTextRenderer_Target(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RToleranceEntity_Id(RJSApi& handler, RToleranceEntity::Id v);
      static RToleranceEntity::Id js2cpp_RToleranceEntity_Id(RJSApi& handler, const QJSValue& v);
      static bool is_RToleranceEntity_Id(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RTraceEntity_Id(RJSApi& handler, RTraceEntity::Id v);
      static RTraceEntity::Id js2cpp_RTraceEntity_Id(RJSApi& handler, const QJSValue& v);
      static bool is_RTraceEntity_Id(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RTransaction_Type(RJSApi& handler, RTransaction::Type v);
      static RTransaction::Type js2cpp_RTransaction_Type(RJSApi& handler, const QJSValue& v);
      static bool is_RTransaction_Type(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RTransaction_Types(RJSApi& handler, RTransaction::Types v);
      static RTransaction::Types js2cpp_RTransaction_Types(RJSApi& handler, const QJSValue& v);
      static bool is_RTransaction_Types(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RTransformOp_Type(RJSApi& handler, RTransformOp::Type v);
      static RTransformOp::Type js2cpp_RTransformOp_Type(RJSApi& handler, const QJSValue& v);
      static bool is_RTransformOp_Type(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RUcs_Id(RJSApi& handler, RUcs::Id v);
      static RUcs::Id js2cpp_RUcs_Id(RJSApi& handler, const QJSValue& v);
      static bool is_RUcs_Id(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RView_Id(RJSApi& handler, RView::Id v);
      static RView::Id js2cpp_RView_Id(RJSApi& handler, const QJSValue& v);
      static bool is_RView_Id(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RViewportEntity_Id(RJSApi& handler, RViewportEntity::Id v);
      static RViewportEntity::Id js2cpp_RViewportEntity_Id(RJSApi& handler, const QJSValue& v);
      static bool is_RViewportEntity_Id(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RXLineEntity_Id(RJSApi& handler, RXLineEntity::Id v);
      static RXLineEntity::Id js2cpp_RXLineEntity_Id(RJSApi& handler, const QJSValue& v);
      static bool is_RXLineEntity_Id(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
  // ---------------------
  // QSharedPointer types:
  // ---------------------
  
      static QJSValue cpp2js_QSharedPointer_REntity(RJSApi& handler, const QSharedPointer<REntity>& v);
      static QSharedPointer<REntity> js2cpp_QSharedPointer_REntity(RJSApi& handler, const QJSValue& v);
      static bool is_QSharedPointer_REntity(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QSharedPointer_RShape(RJSApi& handler, const QSharedPointer<RShape>& v);
      static QSharedPointer<RShape> js2cpp_QSharedPointer_RShape(RJSApi& handler, const QJSValue& v);
      static bool is_QSharedPointer_RShape(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QSharedPointer_RArc(RJSApi& handler, const QSharedPointer<RArc>& v);
      static QSharedPointer<RArc> js2cpp_QSharedPointer_RArc(RJSApi& handler, const QJSValue& v);
      static bool is_QSharedPointer_RArc(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QSharedPointer_RCircle(RJSApi& handler, const QSharedPointer<RCircle>& v);
      static QSharedPointer<RCircle> js2cpp_QSharedPointer_RCircle(RJSApi& handler, const QJSValue& v);
      static bool is_QSharedPointer_RCircle(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QSharedPointer_REllipse(RJSApi& handler, const QSharedPointer<REllipse>& v);
      static QSharedPointer<REllipse> js2cpp_QSharedPointer_REllipse(RJSApi& handler, const QJSValue& v);
      static bool is_QSharedPointer_REllipse(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QSharedPointer_RLine(RJSApi& handler, const QSharedPointer<RLine>& v);
      static QSharedPointer<RLine> js2cpp_QSharedPointer_RLine(RJSApi& handler, const QJSValue& v);
      static bool is_QSharedPointer_RLine(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QSharedPointer_RPoint(RJSApi& handler, const QSharedPointer<RPoint>& v);
      static QSharedPointer<RPoint> js2cpp_QSharedPointer_RPoint(RJSApi& handler, const QJSValue& v);
      static bool is_QSharedPointer_RPoint(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QSharedPointer_RRay(RJSApi& handler, const QSharedPointer<RRay>& v);
      static QSharedPointer<RRay> js2cpp_QSharedPointer_RRay(RJSApi& handler, const QJSValue& v);
      static bool is_QSharedPointer_RRay(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QSharedPointer_RSpline(RJSApi& handler, const QSharedPointer<RSpline>& v);
      static QSharedPointer<RSpline> js2cpp_QSharedPointer_RSpline(RJSApi& handler, const QJSValue& v);
      static bool is_QSharedPointer_RSpline(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QSharedPointer_RTriangle(RJSApi& handler, const QSharedPointer<RTriangle>& v);
      static QSharedPointer<RTriangle> js2cpp_QSharedPointer_RTriangle(RJSApi& handler, const QJSValue& v);
      static bool is_QSharedPointer_RTriangle(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QSharedPointer_RXLine(RJSApi& handler, const QSharedPointer<RXLine>& v);
      static QSharedPointer<RXLine> js2cpp_QSharedPointer_RXLine(RJSApi& handler, const QJSValue& v);
      static bool is_QSharedPointer_RXLine(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
  // ------------------------------------
  // QSharedPointer types (non-copyable):
  // ------------------------------------
  
      static QJSValue cpp2js_QSharedPointer_RObject(RJSApi& handler, const QSharedPointer<RObject>& v);
      static QSharedPointer<RObject> js2cpp_QSharedPointer_RObject(RJSApi& handler, const QJSValue& v);
      static bool is_QSharedPointer_RObject(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QSharedPointer_RArcEntity(RJSApi& handler, const QSharedPointer<RArcEntity>& v);
      static QSharedPointer<RArcEntity> js2cpp_QSharedPointer_RArcEntity(RJSApi& handler, const QJSValue& v);
      static bool is_QSharedPointer_RArcEntity(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QSharedPointer_RAttributeDefinitionEntity(RJSApi& handler, const QSharedPointer<RAttributeDefinitionEntity>& v);
      static QSharedPointer<RAttributeDefinitionEntity> js2cpp_QSharedPointer_RAttributeDefinitionEntity(RJSApi& handler, const QJSValue& v);
      static bool is_QSharedPointer_RAttributeDefinitionEntity(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QSharedPointer_RAttributeEntity(RJSApi& handler, const QSharedPointer<RAttributeEntity>& v);
      static QSharedPointer<RAttributeEntity> js2cpp_QSharedPointer_RAttributeEntity(RJSApi& handler, const QJSValue& v);
      static bool is_QSharedPointer_RAttributeEntity(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QSharedPointer_RBlock(RJSApi& handler, const QSharedPointer<RBlock>& v);
      static QSharedPointer<RBlock> js2cpp_QSharedPointer_RBlock(RJSApi& handler, const QJSValue& v);
      static bool is_QSharedPointer_RBlock(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QSharedPointer_RBlockReferenceEntity(RJSApi& handler, const QSharedPointer<RBlockReferenceEntity>& v);
      static QSharedPointer<RBlockReferenceEntity> js2cpp_QSharedPointer_RBlockReferenceEntity(RJSApi& handler, const QJSValue& v);
      static bool is_QSharedPointer_RBlockReferenceEntity(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QSharedPointer_RCircleEntity(RJSApi& handler, const QSharedPointer<RCircleEntity>& v);
      static QSharedPointer<RCircleEntity> js2cpp_QSharedPointer_RCircleEntity(RJSApi& handler, const QJSValue& v);
      static bool is_QSharedPointer_RCircleEntity(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QSharedPointer_RDimAlignedEntity(RJSApi& handler, const QSharedPointer<RDimAlignedEntity>& v);
      static QSharedPointer<RDimAlignedEntity> js2cpp_QSharedPointer_RDimAlignedEntity(RJSApi& handler, const QJSValue& v);
      static bool is_QSharedPointer_RDimAlignedEntity(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QSharedPointer_RDimAngular2LEntity(RJSApi& handler, const QSharedPointer<RDimAngular2LEntity>& v);
      static QSharedPointer<RDimAngular2LEntity> js2cpp_QSharedPointer_RDimAngular2LEntity(RJSApi& handler, const QJSValue& v);
      static bool is_QSharedPointer_RDimAngular2LEntity(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QSharedPointer_RDimAngular3PEntity(RJSApi& handler, const QSharedPointer<RDimAngular3PEntity>& v);
      static QSharedPointer<RDimAngular3PEntity> js2cpp_QSharedPointer_RDimAngular3PEntity(RJSApi& handler, const QJSValue& v);
      static bool is_QSharedPointer_RDimAngular3PEntity(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QSharedPointer_RDimAngularData(RJSApi& handler, const QSharedPointer<RDimAngularData>& v);
      static QSharedPointer<RDimAngularData> js2cpp_QSharedPointer_RDimAngularData(RJSApi& handler, const QJSValue& v);
      static bool is_QSharedPointer_RDimAngularData(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QSharedPointer_RDimAngularEntity(RJSApi& handler, const QSharedPointer<RDimAngularEntity>& v);
      static QSharedPointer<RDimAngularEntity> js2cpp_QSharedPointer_RDimAngularEntity(RJSApi& handler, const QJSValue& v);
      static bool is_QSharedPointer_RDimAngularEntity(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QSharedPointer_RDimArcLengthEntity(RJSApi& handler, const QSharedPointer<RDimArcLengthEntity>& v);
      static QSharedPointer<RDimArcLengthEntity> js2cpp_QSharedPointer_RDimArcLengthEntity(RJSApi& handler, const QJSValue& v);
      static bool is_QSharedPointer_RDimArcLengthEntity(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QSharedPointer_RDimDiametricEntity(RJSApi& handler, const QSharedPointer<RDimDiametricEntity>& v);
      static QSharedPointer<RDimDiametricEntity> js2cpp_QSharedPointer_RDimDiametricEntity(RJSApi& handler, const QJSValue& v);
      static bool is_QSharedPointer_RDimDiametricEntity(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QSharedPointer_RDimLinearEntity(RJSApi& handler, const QSharedPointer<RDimLinearEntity>& v);
      static QSharedPointer<RDimLinearEntity> js2cpp_QSharedPointer_RDimLinearEntity(RJSApi& handler, const QJSValue& v);
      static bool is_QSharedPointer_RDimLinearEntity(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QSharedPointer_RDimOrdinateEntity(RJSApi& handler, const QSharedPointer<RDimOrdinateEntity>& v);
      static QSharedPointer<RDimOrdinateEntity> js2cpp_QSharedPointer_RDimOrdinateEntity(RJSApi& handler, const QJSValue& v);
      static bool is_QSharedPointer_RDimOrdinateEntity(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QSharedPointer_RDimRadialEntity(RJSApi& handler, const QSharedPointer<RDimRadialEntity>& v);
      static QSharedPointer<RDimRadialEntity> js2cpp_QSharedPointer_RDimRadialEntity(RJSApi& handler, const QJSValue& v);
      static bool is_QSharedPointer_RDimRadialEntity(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QSharedPointer_RDimRotatedEntity(RJSApi& handler, const QSharedPointer<RDimRotatedEntity>& v);
      static QSharedPointer<RDimRotatedEntity> js2cpp_QSharedPointer_RDimRotatedEntity(RJSApi& handler, const QJSValue& v);
      static bool is_QSharedPointer_RDimRotatedEntity(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QSharedPointer_RDimStyle(RJSApi& handler, const QSharedPointer<RDimStyle>& v);
      static QSharedPointer<RDimStyle> js2cpp_QSharedPointer_RDimStyle(RJSApi& handler, const QJSValue& v);
      static bool is_QSharedPointer_RDimStyle(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QSharedPointer_RDimensionEntity(RJSApi& handler, const QSharedPointer<RDimensionEntity>& v);
      static QSharedPointer<RDimensionEntity> js2cpp_QSharedPointer_RDimensionEntity(RJSApi& handler, const QJSValue& v);
      static bool is_QSharedPointer_RDimensionEntity(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QSharedPointer_RDocumentVariables(RJSApi& handler, const QSharedPointer<RDocumentVariables>& v);
      static QSharedPointer<RDocumentVariables> js2cpp_QSharedPointer_RDocumentVariables(RJSApi& handler, const QJSValue& v);
      static bool is_QSharedPointer_RDocumentVariables(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QSharedPointer_REllipseEntity(RJSApi& handler, const QSharedPointer<REllipseEntity>& v);
      static QSharedPointer<REllipseEntity> js2cpp_QSharedPointer_REllipseEntity(RJSApi& handler, const QJSValue& v);
      static bool is_QSharedPointer_REllipseEntity(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QSharedPointer_RFaceEntity(RJSApi& handler, const QSharedPointer<RFaceEntity>& v);
      static QSharedPointer<RFaceEntity> js2cpp_QSharedPointer_RFaceEntity(RJSApi& handler, const QJSValue& v);
      static bool is_QSharedPointer_RFaceEntity(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QSharedPointer_RHatchEntity(RJSApi& handler, const QSharedPointer<RHatchEntity>& v);
      static QSharedPointer<RHatchEntity> js2cpp_QSharedPointer_RHatchEntity(RJSApi& handler, const QJSValue& v);
      static bool is_QSharedPointer_RHatchEntity(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QSharedPointer_RImageEntity(RJSApi& handler, const QSharedPointer<RImageEntity>& v);
      static QSharedPointer<RImageEntity> js2cpp_QSharedPointer_RImageEntity(RJSApi& handler, const QJSValue& v);
      static bool is_QSharedPointer_RImageEntity(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QSharedPointer_RLayer(RJSApi& handler, const QSharedPointer<RLayer>& v);
      static QSharedPointer<RLayer> js2cpp_QSharedPointer_RLayer(RJSApi& handler, const QJSValue& v);
      static bool is_QSharedPointer_RLayer(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QSharedPointer_RLayerState(RJSApi& handler, const QSharedPointer<RLayerState>& v);
      static QSharedPointer<RLayerState> js2cpp_QSharedPointer_RLayerState(RJSApi& handler, const QJSValue& v);
      static bool is_QSharedPointer_RLayerState(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QSharedPointer_RLayout(RJSApi& handler, const QSharedPointer<RLayout>& v);
      static QSharedPointer<RLayout> js2cpp_QSharedPointer_RLayout(RJSApi& handler, const QJSValue& v);
      static bool is_QSharedPointer_RLayout(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QSharedPointer_RLeaderEntity(RJSApi& handler, const QSharedPointer<RLeaderEntity>& v);
      static QSharedPointer<RLeaderEntity> js2cpp_QSharedPointer_RLeaderEntity(RJSApi& handler, const QJSValue& v);
      static bool is_QSharedPointer_RLeaderEntity(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QSharedPointer_RLineEntity(RJSApi& handler, const QSharedPointer<RLineEntity>& v);
      static QSharedPointer<RLineEntity> js2cpp_QSharedPointer_RLineEntity(RJSApi& handler, const QJSValue& v);
      static bool is_QSharedPointer_RLineEntity(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QSharedPointer_RLinetype(RJSApi& handler, const QSharedPointer<RLinetype>& v);
      static QSharedPointer<RLinetype> js2cpp_QSharedPointer_RLinetype(RJSApi& handler, const QJSValue& v);
      static bool is_QSharedPointer_RLinetype(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QSharedPointer_RPointEntity(RJSApi& handler, const QSharedPointer<RPointEntity>& v);
      static QSharedPointer<RPointEntity> js2cpp_QSharedPointer_RPointEntity(RJSApi& handler, const QJSValue& v);
      static bool is_QSharedPointer_RPointEntity(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QSharedPointer_RPolyline(RJSApi& handler, const QSharedPointer<RPolyline>& v);
      static QSharedPointer<RPolyline> js2cpp_QSharedPointer_RPolyline(RJSApi& handler, const QJSValue& v);
      static bool is_QSharedPointer_RPolyline(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QSharedPointer_RPolylineEntity(RJSApi& handler, const QSharedPointer<RPolylineEntity>& v);
      static QSharedPointer<RPolylineEntity> js2cpp_QSharedPointer_RPolylineEntity(RJSApi& handler, const QJSValue& v);
      static bool is_QSharedPointer_RPolylineEntity(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QSharedPointer_RRayEntity(RJSApi& handler, const QSharedPointer<RRayEntity>& v);
      static QSharedPointer<RRayEntity> js2cpp_QSharedPointer_RRayEntity(RJSApi& handler, const QJSValue& v);
      static bool is_QSharedPointer_RRayEntity(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QSharedPointer_RSolidEntity(RJSApi& handler, const QSharedPointer<RSolidEntity>& v);
      static QSharedPointer<RSolidEntity> js2cpp_QSharedPointer_RSolidEntity(RJSApi& handler, const QJSValue& v);
      static bool is_QSharedPointer_RSolidEntity(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QSharedPointer_RSplineEntity(RJSApi& handler, const QSharedPointer<RSplineEntity>& v);
      static QSharedPointer<RSplineEntity> js2cpp_QSharedPointer_RSplineEntity(RJSApi& handler, const QJSValue& v);
      static bool is_QSharedPointer_RSplineEntity(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QSharedPointer_RTextEntity(RJSApi& handler, const QSharedPointer<RTextEntity>& v);
      static QSharedPointer<RTextEntity> js2cpp_QSharedPointer_RTextEntity(RJSApi& handler, const QJSValue& v);
      static bool is_QSharedPointer_RTextEntity(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QSharedPointer_RToleranceEntity(RJSApi& handler, const QSharedPointer<RToleranceEntity>& v);
      static QSharedPointer<RToleranceEntity> js2cpp_QSharedPointer_RToleranceEntity(RJSApi& handler, const QJSValue& v);
      static bool is_QSharedPointer_RToleranceEntity(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QSharedPointer_RTraceEntity(RJSApi& handler, const QSharedPointer<RTraceEntity>& v);
      static QSharedPointer<RTraceEntity> js2cpp_QSharedPointer_RTraceEntity(RJSApi& handler, const QJSValue& v);
      static bool is_QSharedPointer_RTraceEntity(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QSharedPointer_RUcs(RJSApi& handler, const QSharedPointer<RUcs>& v);
      static QSharedPointer<RUcs> js2cpp_QSharedPointer_RUcs(RJSApi& handler, const QJSValue& v);
      static bool is_QSharedPointer_RUcs(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QSharedPointer_RView(RJSApi& handler, const QSharedPointer<RView>& v);
      static QSharedPointer<RView> js2cpp_QSharedPointer_RView(RJSApi& handler, const QJSValue& v);
      static bool is_QSharedPointer_RView(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QSharedPointer_RViewportEntity(RJSApi& handler, const QSharedPointer<RViewportEntity>& v);
      static QSharedPointer<RViewportEntity> js2cpp_QSharedPointer_RViewportEntity(RJSApi& handler, const QJSValue& v);
      static bool is_QSharedPointer_RViewportEntity(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QSharedPointer_RXLineEntity(RJSApi& handler, const QSharedPointer<RXLineEntity>& v);
      static QSharedPointer<RXLineEntity> js2cpp_QSharedPointer_RXLineEntity(RJSApi& handler, const QJSValue& v);
      static bool is_QSharedPointer_RXLineEntity(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
  // --------------
  // wrapped types:
  // --------------
  
      static QJSValue cpp2js_RArc(RJSApi& handler, const RArc* v);
      static QJSValue cpp2js_RArc(RJSApi& handler, const RArc& v);
      static RArc js2cpp_RArc(RJSApi& handler, const QJSValue& v);
      static bool is_RArc(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RArcData(RJSApi& handler, const RArcData* v);
      static QJSValue cpp2js_RArcData(RJSApi& handler, const RArcData& v);
      static RArcData js2cpp_RArcData(RJSApi& handler, const QJSValue& v);
      static bool is_RArcData(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RAttributeData(RJSApi& handler, const RAttributeData* v);
      static QJSValue cpp2js_RAttributeData(RJSApi& handler, const RAttributeData& v);
      static RAttributeData js2cpp_RAttributeData(RJSApi& handler, const QJSValue& v);
      static bool is_RAttributeData(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RAttributeDefinitionData(RJSApi& handler, const RAttributeDefinitionData* v);
      static QJSValue cpp2js_RAttributeDefinitionData(RJSApi& handler, const RAttributeDefinitionData& v);
      static RAttributeDefinitionData js2cpp_RAttributeDefinitionData(RJSApi& handler, const QJSValue& v);
      static bool is_RAttributeDefinitionData(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RAutoLoadJs(RJSApi& handler, const RAutoLoadJs* v);
      static QJSValue cpp2js_RAutoLoadJs(RJSApi& handler, const RAutoLoadJs& v);
      static RAutoLoadJs js2cpp_RAutoLoadJs(RJSApi& handler, const QJSValue& v);
      static bool is_RAutoLoadJs(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RBlockReferenceData(RJSApi& handler, const RBlockReferenceData* v);
      static QJSValue cpp2js_RBlockReferenceData(RJSApi& handler, const RBlockReferenceData& v);
      static RBlockReferenceData js2cpp_RBlockReferenceData(RJSApi& handler, const QJSValue& v);
      static bool is_RBlockReferenceData(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RBox(RJSApi& handler, const RBox* v);
      static QJSValue cpp2js_RBox(RJSApi& handler, const RBox& v);
      static RBox js2cpp_RBox(RJSApi& handler, const QJSValue& v);
      static bool is_RBox(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RCircle(RJSApi& handler, const RCircle* v);
      static QJSValue cpp2js_RCircle(RJSApi& handler, const RCircle& v);
      static RCircle js2cpp_RCircle(RJSApi& handler, const QJSValue& v);
      static bool is_RCircle(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RCircleData(RJSApi& handler, const RCircleData* v);
      static QJSValue cpp2js_RCircleData(RJSApi& handler, const RCircleData& v);
      static RCircleData js2cpp_RCircleData(RJSApi& handler, const QJSValue& v);
      static bool is_RCircleData(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RColor(RJSApi& handler, const RColor* v);
      static QJSValue cpp2js_RColor(RJSApi& handler, const RColor& v);
      static RColor js2cpp_RColor(RJSApi& handler, const QJSValue& v);
      static bool is_RColor(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RDebug(RJSApi& handler, const RDebug* v);
      static QJSValue cpp2js_RDebug(RJSApi& handler, const RDebug& v);
      static RDebug js2cpp_RDebug(RJSApi& handler, const QJSValue& v);
      static bool is_RDebug(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RDimAlignedData(RJSApi& handler, const RDimAlignedData* v);
      static QJSValue cpp2js_RDimAlignedData(RJSApi& handler, const RDimAlignedData& v);
      static RDimAlignedData js2cpp_RDimAlignedData(RJSApi& handler, const QJSValue& v);
      static bool is_RDimAlignedData(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RDimAngular2LData(RJSApi& handler, const RDimAngular2LData* v);
      static QJSValue cpp2js_RDimAngular2LData(RJSApi& handler, const RDimAngular2LData& v);
      static RDimAngular2LData js2cpp_RDimAngular2LData(RJSApi& handler, const QJSValue& v);
      static bool is_RDimAngular2LData(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RDimAngular3PData(RJSApi& handler, const RDimAngular3PData* v);
      static QJSValue cpp2js_RDimAngular3PData(RJSApi& handler, const RDimAngular3PData& v);
      static RDimAngular3PData js2cpp_RDimAngular3PData(RJSApi& handler, const QJSValue& v);
      static bool is_RDimAngular3PData(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RDimArcLengthData(RJSApi& handler, const RDimArcLengthData* v);
      static QJSValue cpp2js_RDimArcLengthData(RJSApi& handler, const RDimArcLengthData& v);
      static RDimArcLengthData js2cpp_RDimArcLengthData(RJSApi& handler, const QJSValue& v);
      static bool is_RDimArcLengthData(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RDimDiametricData(RJSApi& handler, const RDimDiametricData* v);
      static QJSValue cpp2js_RDimDiametricData(RJSApi& handler, const RDimDiametricData& v);
      static RDimDiametricData js2cpp_RDimDiametricData(RJSApi& handler, const QJSValue& v);
      static bool is_RDimDiametricData(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RDimLinearData(RJSApi& handler, const RDimLinearData* v);
      static QJSValue cpp2js_RDimLinearData(RJSApi& handler, const RDimLinearData& v);
      static RDimLinearData js2cpp_RDimLinearData(RJSApi& handler, const QJSValue& v);
      static bool is_RDimLinearData(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RDimOrdinateData(RJSApi& handler, const RDimOrdinateData* v);
      static QJSValue cpp2js_RDimOrdinateData(RJSApi& handler, const RDimOrdinateData& v);
      static RDimOrdinateData js2cpp_RDimOrdinateData(RJSApi& handler, const QJSValue& v);
      static bool is_RDimOrdinateData(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RDimRadialData(RJSApi& handler, const RDimRadialData* v);
      static QJSValue cpp2js_RDimRadialData(RJSApi& handler, const RDimRadialData& v);
      static RDimRadialData js2cpp_RDimRadialData(RJSApi& handler, const QJSValue& v);
      static bool is_RDimRadialData(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RDimRotatedData(RJSApi& handler, const RDimRotatedData* v);
      static QJSValue cpp2js_RDimRotatedData(RJSApi& handler, const RDimRotatedData& v);
      static RDimRotatedData js2cpp_RDimRotatedData(RJSApi& handler, const QJSValue& v);
      static bool is_RDimRotatedData(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RDimStyleData(RJSApi& handler, const RDimStyleData* v);
      static QJSValue cpp2js_RDimStyleData(RJSApi& handler, const RDimStyleData& v);
      static RDimStyleData js2cpp_RDimStyleData(RJSApi& handler, const QJSValue& v);
      static bool is_RDimStyleData(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RDxfServices(RJSApi& handler, const RDxfServices* v);
      static QJSValue cpp2js_RDxfServices(RJSApi& handler, const RDxfServices& v);
      static RDxfServices js2cpp_RDxfServices(RJSApi& handler, const QJSValue& v);
      static bool is_RDxfServices(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_REllipse(RJSApi& handler, const REllipse* v);
      static QJSValue cpp2js_REllipse(RJSApi& handler, const REllipse& v);
      static REllipse js2cpp_REllipse(RJSApi& handler, const QJSValue& v);
      static bool is_REllipse(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_REllipseData(RJSApi& handler, const REllipseData* v);
      static QJSValue cpp2js_REllipseData(RJSApi& handler, const REllipseData& v);
      static REllipseData js2cpp_REllipseData(RJSApi& handler, const QJSValue& v);
      static bool is_REllipseData(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RFaceData(RJSApi& handler, const RFaceData* v);
      static QJSValue cpp2js_RFaceData(RJSApi& handler, const RFaceData& v);
      static RFaceData js2cpp_RFaceData(RJSApi& handler, const QJSValue& v);
      static bool is_RFaceData(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RFileCache(RJSApi& handler, const RFileCache* v);
      static QJSValue cpp2js_RFileCache(RJSApi& handler, const RFileCache& v);
      static RFileCache js2cpp_RFileCache(RJSApi& handler, const QJSValue& v);
      static bool is_RFileCache(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RFileExporterAdapter(RJSApi& handler, const RFileExporterAdapter* v);
      static QJSValue cpp2js_RFileExporterAdapter(RJSApi& handler, const RFileExporterAdapter& v);
      static RFileExporterAdapter js2cpp_RFileExporterAdapter(RJSApi& handler, const QJSValue& v);
      static bool is_RFileExporterAdapter(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RFileExporterFactoryAdapter(RJSApi& handler, const RFileExporterFactoryAdapter* v);
      static QJSValue cpp2js_RFileExporterFactoryAdapter(RJSApi& handler, const RFileExporterFactoryAdapter& v);
      static RFileExporterFactoryAdapter js2cpp_RFileExporterFactoryAdapter(RJSApi& handler, const QJSValue& v);
      static bool is_RFileExporterFactoryAdapter(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RFileExporterRegistry(RJSApi& handler, const RFileExporterRegistry* v);
      static QJSValue cpp2js_RFileExporterRegistry(RJSApi& handler, const RFileExporterRegistry& v);
      static RFileExporterRegistry js2cpp_RFileExporterRegistry(RJSApi& handler, const QJSValue& v);
      static bool is_RFileExporterRegistry(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RFileImporterAdapter(RJSApi& handler, const RFileImporterAdapter* v);
      static QJSValue cpp2js_RFileImporterAdapter(RJSApi& handler, const RFileImporterAdapter& v);
      static RFileImporterAdapter js2cpp_RFileImporterAdapter(RJSApi& handler, const QJSValue& v);
      static bool is_RFileImporterAdapter(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RFileImporterFactoryAdapter(RJSApi& handler, const RFileImporterFactoryAdapter* v);
      static QJSValue cpp2js_RFileImporterFactoryAdapter(RJSApi& handler, const RFileImporterFactoryAdapter& v);
      static RFileImporterFactoryAdapter js2cpp_RFileImporterFactoryAdapter(RJSApi& handler, const QJSValue& v);
      static bool is_RFileImporterFactoryAdapter(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RFileImporterRegistry(RJSApi& handler, const RFileImporterRegistry* v);
      static QJSValue cpp2js_RFileImporterRegistry(RJSApi& handler, const RFileImporterRegistry& v);
      static RFileImporterRegistry js2cpp_RFileImporterRegistry(RJSApi& handler, const QJSValue& v);
      static bool is_RFileImporterRegistry(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RFont(RJSApi& handler, const RFont* v);
      static QJSValue cpp2js_RFont(RJSApi& handler, const RFont& v);
      static RFont js2cpp_RFont(RJSApi& handler, const QJSValue& v);
      static bool is_RFont(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RFontList(RJSApi& handler, const RFontList* v);
      static QJSValue cpp2js_RFontList(RJSApi& handler, const RFontList& v);
      static RFontList js2cpp_RFontList(RJSApi& handler, const QJSValue& v);
      static bool is_RFontList(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RGraphicsSceneDrawable(RJSApi& handler, const RGraphicsSceneDrawable* v);
      static QJSValue cpp2js_RGraphicsSceneDrawable(RJSApi& handler, const RGraphicsSceneDrawable& v);
      static RGraphicsSceneDrawable js2cpp_RGraphicsSceneDrawable(RJSApi& handler, const QJSValue& v);
      static bool is_RGraphicsSceneDrawable(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RHatchData(RJSApi& handler, const RHatchData* v);
      static QJSValue cpp2js_RHatchData(RJSApi& handler, const RHatchData& v);
      static RHatchData js2cpp_RHatchData(RJSApi& handler, const QJSValue& v);
      static bool is_RHatchData(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RImageData(RJSApi& handler, const RImageData* v);
      static QJSValue cpp2js_RImageData(RJSApi& handler, const RImageData& v);
      static RImageData js2cpp_RImageData(RJSApi& handler, const QJSValue& v);
      static bool is_RImageData(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RLeaderData(RJSApi& handler, const RLeaderData* v);
      static QJSValue cpp2js_RLeaderData(RJSApi& handler, const RLeaderData& v);
      static RLeaderData js2cpp_RLeaderData(RJSApi& handler, const QJSValue& v);
      static bool is_RLeaderData(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RLine(RJSApi& handler, const RLine* v);
      static QJSValue cpp2js_RLine(RJSApi& handler, const RLine& v);
      static RLine js2cpp_RLine(RJSApi& handler, const QJSValue& v);
      static bool is_RLine(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RLineData(RJSApi& handler, const RLineData* v);
      static QJSValue cpp2js_RLineData(RJSApi& handler, const RLineData& v);
      static RLineData js2cpp_RLineData(RJSApi& handler, const QJSValue& v);
      static bool is_RLineData(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RLinetypePattern(RJSApi& handler, const RLinetypePattern* v);
      static QJSValue cpp2js_RLinetypePattern(RJSApi& handler, const RLinetypePattern& v);
      static RLinetypePattern js2cpp_RLinetypePattern(RJSApi& handler, const QJSValue& v);
      static bool is_RLinetypePattern(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RLineweight(RJSApi& handler, const RLineweight* v);
      static QJSValue cpp2js_RLineweight(RJSApi& handler, const RLineweight& v);
      static RLineweight js2cpp_RLineweight(RJSApi& handler, const QJSValue& v);
      static bool is_RLineweight(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RMath(RJSApi& handler, const RMath* v);
      static QJSValue cpp2js_RMath(RJSApi& handler, const RMath& v);
      static RMath js2cpp_RMath(RJSApi& handler, const QJSValue& v);
      static bool is_RMath(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RMatrix(RJSApi& handler, const RMatrix* v);
      static QJSValue cpp2js_RMatrix(RJSApi& handler, const RMatrix& v);
      static RMatrix js2cpp_RMatrix(RJSApi& handler, const QJSValue& v);
      static bool is_RMatrix(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RPainterPath(RJSApi& handler, const RPainterPath* v);
      static QJSValue cpp2js_RPainterPath(RJSApi& handler, const RPainterPath& v);
      static RPainterPath js2cpp_RPainterPath(RJSApi& handler, const QJSValue& v);
      static bool is_RPainterPath(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RPattern(RJSApi& handler, const RPattern* v);
      static QJSValue cpp2js_RPattern(RJSApi& handler, const RPattern& v);
      static RPattern js2cpp_RPattern(RJSApi& handler, const QJSValue& v);
      static bool is_RPattern(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RPatternLine(RJSApi& handler, const RPatternLine* v);
      static QJSValue cpp2js_RPatternLine(RJSApi& handler, const RPatternLine& v);
      static RPatternLine js2cpp_RPatternLine(RJSApi& handler, const QJSValue& v);
      static bool is_RPatternLine(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RPatternList(RJSApi& handler, const RPatternList* v);
      static QJSValue cpp2js_RPatternList(RJSApi& handler, const RPatternList& v);
      static RPatternList js2cpp_RPatternList(RJSApi& handler, const QJSValue& v);
      static bool is_RPatternList(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RPatternListImperial(RJSApi& handler, const RPatternListImperial* v);
      static QJSValue cpp2js_RPatternListImperial(RJSApi& handler, const RPatternListImperial& v);
      static RPatternListImperial js2cpp_RPatternListImperial(RJSApi& handler, const QJSValue& v);
      static bool is_RPatternListImperial(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RPatternListMetric(RJSApi& handler, const RPatternListMetric* v);
      static QJSValue cpp2js_RPatternListMetric(RJSApi& handler, const RPatternListMetric& v);
      static RPatternListMetric js2cpp_RPatternListMetric(RJSApi& handler, const QJSValue& v);
      static bool is_RPatternListMetric(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RPluginInfo(RJSApi& handler, const RPluginInfo* v);
      static QJSValue cpp2js_RPluginInfo(RJSApi& handler, const RPluginInfo& v);
      static RPluginInfo js2cpp_RPluginInfo(RJSApi& handler, const QJSValue& v);
      static bool is_RPluginInfo(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RPluginLoader(RJSApi& handler, const RPluginLoader* v);
      static QJSValue cpp2js_RPluginLoader(RJSApi& handler, const RPluginLoader& v);
      static RPluginLoader js2cpp_RPluginLoader(RJSApi& handler, const QJSValue& v);
      static bool is_RPluginLoader(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RPoint(RJSApi& handler, const RPoint* v);
      static QJSValue cpp2js_RPoint(RJSApi& handler, const RPoint& v);
      static RPoint js2cpp_RPoint(RJSApi& handler, const QJSValue& v);
      static bool is_RPoint(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RPointData(RJSApi& handler, const RPointData* v);
      static QJSValue cpp2js_RPointData(RJSApi& handler, const RPointData& v);
      static RPointData js2cpp_RPointData(RJSApi& handler, const QJSValue& v);
      static bool is_RPointData(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RPolyline(RJSApi& handler, const RPolyline* v);
      static QJSValue cpp2js_RPolyline(RJSApi& handler, const RPolyline& v);
      static RPolyline js2cpp_RPolyline(RJSApi& handler, const QJSValue& v);
      static bool is_RPolyline(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RPolylineData(RJSApi& handler, const RPolylineData* v);
      static QJSValue cpp2js_RPolylineData(RJSApi& handler, const RPolylineData& v);
      static RPolylineData js2cpp_RPolylineData(RJSApi& handler, const QJSValue& v);
      static bool is_RPolylineData(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RPropertyAttributes(RJSApi& handler, const RPropertyAttributes* v);
      static QJSValue cpp2js_RPropertyAttributes(RJSApi& handler, const RPropertyAttributes& v);
      static RPropertyAttributes js2cpp_RPropertyAttributes(RJSApi& handler, const QJSValue& v);
      static bool is_RPropertyAttributes(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RPropertyChange(RJSApi& handler, const RPropertyChange* v);
      static QJSValue cpp2js_RPropertyChange(RJSApi& handler, const RPropertyChange& v);
      static RPropertyChange js2cpp_RPropertyChange(RJSApi& handler, const QJSValue& v);
      static bool is_RPropertyChange(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RPropertyEditor(RJSApi& handler, const RPropertyEditor* v);
      static QJSValue cpp2js_RPropertyEditor(RJSApi& handler, const RPropertyEditor& v);
      static RPropertyEditor js2cpp_RPropertyEditor(RJSApi& handler, const QJSValue& v);
      static bool is_RPropertyEditor(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RPropertyTypeId(RJSApi& handler, const RPropertyTypeId* v);
      static QJSValue cpp2js_RPropertyTypeId(RJSApi& handler, const RPropertyTypeId& v);
      static RPropertyTypeId js2cpp_RPropertyTypeId(RJSApi& handler, const QJSValue& v);
      static bool is_RPropertyTypeId(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RRay(RJSApi& handler, const RRay* v);
      static QJSValue cpp2js_RRay(RJSApi& handler, const RRay& v);
      static RRay js2cpp_RRay(RJSApi& handler, const QJSValue& v);
      static bool is_RRay(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RRayData(RJSApi& handler, const RRayData* v);
      static QJSValue cpp2js_RRayData(RJSApi& handler, const RRayData& v);
      static RRayData js2cpp_RRayData(RJSApi& handler, const QJSValue& v);
      static bool is_RRayData(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RRefPoint(RJSApi& handler, const RRefPoint* v);
      static QJSValue cpp2js_RRefPoint(RJSApi& handler, const RRefPoint& v);
      static RRefPoint js2cpp_RRefPoint(RJSApi& handler, const QJSValue& v);
      static bool is_RRefPoint(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RS(RJSApi& handler, const RS* v);
      static QJSValue cpp2js_RS(RJSApi& handler, const RS& v);
      static RS js2cpp_RS(RJSApi& handler, const QJSValue& v);
      static bool is_RS(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RSettings(RJSApi& handler, const RSettings* v);
      static QJSValue cpp2js_RSettings(RJSApi& handler, const RSettings& v);
      static RSettings js2cpp_RSettings(RJSApi& handler, const QJSValue& v);
      static bool is_RSettings(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RSolidData(RJSApi& handler, const RSolidData* v);
      static QJSValue cpp2js_RSolidData(RJSApi& handler, const RSolidData& v);
      static RSolidData js2cpp_RSolidData(RJSApi& handler, const QJSValue& v);
      static bool is_RSolidData(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RSpatialIndexNavel(RJSApi& handler, const RSpatialIndexNavel* v);
      static QJSValue cpp2js_RSpatialIndexNavel(RJSApi& handler, const RSpatialIndexNavel& v);
      static RSpatialIndexNavel js2cpp_RSpatialIndexNavel(RJSApi& handler, const QJSValue& v);
      static bool is_RSpatialIndexNavel(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RSpatialIndexVisitorAdapter(RJSApi& handler, const RSpatialIndexVisitorAdapter* v);
      static QJSValue cpp2js_RSpatialIndexVisitorAdapter(RJSApi& handler, const RSpatialIndexVisitorAdapter& v);
      static RSpatialIndexVisitorAdapter js2cpp_RSpatialIndexVisitorAdapter(RJSApi& handler, const QJSValue& v);
      static bool is_RSpatialIndexVisitorAdapter(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RSpline(RJSApi& handler, const RSpline* v);
      static QJSValue cpp2js_RSpline(RJSApi& handler, const RSpline& v);
      static RSpline js2cpp_RSpline(RJSApi& handler, const QJSValue& v);
      static bool is_RSpline(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RSplineData(RJSApi& handler, const RSplineData* v);
      static QJSValue cpp2js_RSplineData(RJSApi& handler, const RSplineData& v);
      static RSplineData js2cpp_RSplineData(RJSApi& handler, const QJSValue& v);
      static bool is_RSplineData(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RTextBasedData(RJSApi& handler, const RTextBasedData* v);
      static QJSValue cpp2js_RTextBasedData(RJSApi& handler, const RTextBasedData& v);
      static RTextBasedData js2cpp_RTextBasedData(RJSApi& handler, const QJSValue& v);
      static bool is_RTextBasedData(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RTextData(RJSApi& handler, const RTextData* v);
      static QJSValue cpp2js_RTextData(RJSApi& handler, const RTextData& v);
      static RTextData js2cpp_RTextData(RJSApi& handler, const QJSValue& v);
      static bool is_RTextData(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RTextLabel(RJSApi& handler, const RTextLabel* v);
      static QJSValue cpp2js_RTextLabel(RJSApi& handler, const RTextLabel& v);
      static RTextLabel js2cpp_RTextLabel(RJSApi& handler, const QJSValue& v);
      static bool is_RTextLabel(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RTextLayout(RJSApi& handler, const RTextLayout* v);
      static QJSValue cpp2js_RTextLayout(RJSApi& handler, const RTextLayout& v);
      static RTextLayout js2cpp_RTextLayout(RJSApi& handler, const QJSValue& v);
      static bool is_RTextLayout(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RToleranceData(RJSApi& handler, const RToleranceData* v);
      static QJSValue cpp2js_RToleranceData(RJSApi& handler, const RToleranceData& v);
      static RToleranceData js2cpp_RToleranceData(RJSApi& handler, const QJSValue& v);
      static bool is_RToleranceData(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RTraceData(RJSApi& handler, const RTraceData* v);
      static QJSValue cpp2js_RTraceData(RJSApi& handler, const RTraceData& v);
      static RTraceData js2cpp_RTraceData(RJSApi& handler, const QJSValue& v);
      static bool is_RTraceData(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RTransaction(RJSApi& handler, const RTransaction* v);
      static QJSValue cpp2js_RTransaction(RJSApi& handler, const RTransaction& v);
      static RTransaction js2cpp_RTransaction(RJSApi& handler, const QJSValue& v);
      static bool is_RTransaction(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RTransform(RJSApi& handler, const RTransform* v);
      static QJSValue cpp2js_RTransform(RJSApi& handler, const RTransform& v);
      static RTransform js2cpp_RTransform(RJSApi& handler, const QJSValue& v);
      static bool is_RTransform(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RTransformOp(RJSApi& handler, const RTransformOp* v);
      static QJSValue cpp2js_RTransformOp(RJSApi& handler, const RTransformOp& v);
      static RTransformOp js2cpp_RTransformOp(RJSApi& handler, const QJSValue& v);
      static bool is_RTransformOp(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RTriangle(RJSApi& handler, const RTriangle* v);
      static QJSValue cpp2js_RTriangle(RJSApi& handler, const RTriangle& v);
      static RTriangle js2cpp_RTriangle(RJSApi& handler, const QJSValue& v);
      static bool is_RTriangle(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RUnit(RJSApi& handler, const RUnit* v);
      static QJSValue cpp2js_RUnit(RJSApi& handler, const RUnit& v);
      static RUnit js2cpp_RUnit(RJSApi& handler, const QJSValue& v);
      static bool is_RUnit(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RViewFocusListenerAdapter(RJSApi& handler, const RViewFocusListenerAdapter* v);
      static QJSValue cpp2js_RViewFocusListenerAdapter(RJSApi& handler, const RViewFocusListenerAdapter& v);
      static RViewFocusListenerAdapter js2cpp_RViewFocusListenerAdapter(RJSApi& handler, const QJSValue& v);
      static bool is_RViewFocusListenerAdapter(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RViewportData(RJSApi& handler, const RViewportData* v);
      static QJSValue cpp2js_RViewportData(RJSApi& handler, const RViewportData& v);
      static RViewportData js2cpp_RViewportData(RJSApi& handler, const QJSValue& v);
      static bool is_RViewportData(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RXLine(RJSApi& handler, const RXLine* v);
      static QJSValue cpp2js_RXLine(RJSApi& handler, const RXLine& v);
      static RXLine js2cpp_RXLine(RJSApi& handler, const QJSValue& v);
      static bool is_RXLine(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RXLineData(RJSApi& handler, const RXLineData* v);
      static QJSValue cpp2js_RXLineData(RJSApi& handler, const RXLineData& v);
      static RXLineData js2cpp_RXLineData(RJSApi& handler, const QJSValue& v);
      static bool is_RXLineData(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RVector(RJSApi& handler, const RVector* v);
      static QJSValue cpp2js_RVector(RJSApi& handler, const RVector& v);
      static RVector js2cpp_RVector(RJSApi& handler, const QJSValue& v);
      static bool is_RVector(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
  // ----------------------
  // wrapped pointer types:
  // ----------------------
  
      static QJSValue cpp2js_RShape(RJSApi& handler, RShape* v);
      static RShape* js2cpp_RShape_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RShape_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RAction(RJSApi& handler, RAction* v);
      static RAction* js2cpp_RAction_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RAction_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RActionAdapter(RJSApi& handler, RActionAdapter* v);
      static RActionAdapter* js2cpp_RActionAdapter_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RActionAdapter_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RAddObjectOperation(RJSApi& handler, RAddObjectOperation* v);
      static RAddObjectOperation* js2cpp_RAddObjectOperation_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RAddObjectOperation_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RAddObjectsOperation(RJSApi& handler, RAddObjectsOperation* v);
      static RAddObjectsOperation* js2cpp_RAddObjectsOperation_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RAddObjectsOperation_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RArcEntity(RJSApi& handler, RArcEntity* v);
      static RArcEntity* js2cpp_RArcEntity_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RArcEntity_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RAttributeDefinitionEntity(RJSApi& handler, RAttributeDefinitionEntity* v);
      static RAttributeDefinitionEntity* js2cpp_RAttributeDefinitionEntity_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RAttributeDefinitionEntity_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RAttributeEntity(RJSApi& handler, RAttributeEntity* v);
      static RAttributeEntity* js2cpp_RAttributeEntity_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RAttributeEntity_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RBlock(RJSApi& handler, RBlock* v);
      static RBlock* js2cpp_RBlock_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RBlock_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RBlockListener(RJSApi& handler, RBlockListener* v);
      static RBlockListener* js2cpp_RBlockListener_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RBlockListener_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RBlockReferenceEntity(RJSApi& handler, RBlockReferenceEntity* v);
      static RBlockReferenceEntity* js2cpp_RBlockReferenceEntity_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RBlockReferenceEntity_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RChangePropertyOperation(RJSApi& handler, RChangePropertyOperation* v);
      static RChangePropertyOperation* js2cpp_RChangePropertyOperation_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RChangePropertyOperation_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RCircleEntity(RJSApi& handler, RCircleEntity* v);
      static RCircleEntity* js2cpp_RCircleEntity_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RCircleEntity_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RClickReferencePointOperation(RJSApi& handler, RClickReferencePointOperation* v);
      static RClickReferencePointOperation* js2cpp_RClickReferencePointOperation_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RClickReferencePointOperation_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RClipboardOperation(RJSApi& handler, RClipboardOperation* v);
      static RClipboardOperation* js2cpp_RClipboardOperation_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RClipboardOperation_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RCloseCurrentEvent(RJSApi& handler, RCloseCurrentEvent* v);
      static RCloseCurrentEvent* js2cpp_RCloseCurrentEvent_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RCloseCurrentEvent_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RCommandEvent(RJSApi& handler, RCommandEvent* v);
      static RCommandEvent* js2cpp_RCommandEvent_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RCommandEvent_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RCoordinateEvent(RJSApi& handler, RCoordinateEvent* v);
      static RCoordinateEvent* js2cpp_RCoordinateEvent_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RCoordinateEvent_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RCoordinateListener(RJSApi& handler, RCoordinateListener* v);
      static RCoordinateListener* js2cpp_RCoordinateListener_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RCoordinateListener_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RCopyOperation(RJSApi& handler, RCopyOperation* v);
      static RCopyOperation* js2cpp_RCopyOperation_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RCopyOperation_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RDeleteAllEntitiesOperation(RJSApi& handler, RDeleteAllEntitiesOperation* v);
      static RDeleteAllEntitiesOperation* js2cpp_RDeleteAllEntitiesOperation_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RDeleteAllEntitiesOperation_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RDeleteObjectOperation(RJSApi& handler, RDeleteObjectOperation* v);
      static RDeleteObjectOperation* js2cpp_RDeleteObjectOperation_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RDeleteObjectOperation_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RDeleteObjectsOperation(RJSApi& handler, RDeleteObjectsOperation* v);
      static RDeleteObjectsOperation* js2cpp_RDeleteObjectsOperation_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RDeleteObjectsOperation_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RDeleteSelectionOperation(RJSApi& handler, RDeleteSelectionOperation* v);
      static RDeleteSelectionOperation* js2cpp_RDeleteSelectionOperation_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RDeleteSelectionOperation_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RDimAlignedEntity(RJSApi& handler, RDimAlignedEntity* v);
      static RDimAlignedEntity* js2cpp_RDimAlignedEntity_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RDimAlignedEntity_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RDimAngular2LEntity(RJSApi& handler, RDimAngular2LEntity* v);
      static RDimAngular2LEntity* js2cpp_RDimAngular2LEntity_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RDimAngular2LEntity_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RDimAngular3PEntity(RJSApi& handler, RDimAngular3PEntity* v);
      static RDimAngular3PEntity* js2cpp_RDimAngular3PEntity_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RDimAngular3PEntity_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RDimAngularData(RJSApi& handler, RDimAngularData* v);
      static RDimAngularData* js2cpp_RDimAngularData_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RDimAngularData_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RDimAngularEntity(RJSApi& handler, RDimAngularEntity* v);
      static RDimAngularEntity* js2cpp_RDimAngularEntity_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RDimAngularEntity_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RDimArcLengthEntity(RJSApi& handler, RDimArcLengthEntity* v);
      static RDimArcLengthEntity* js2cpp_RDimArcLengthEntity_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RDimArcLengthEntity_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RDimDiametricEntity(RJSApi& handler, RDimDiametricEntity* v);
      static RDimDiametricEntity* js2cpp_RDimDiametricEntity_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RDimDiametricEntity_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RDimLinearEntity(RJSApi& handler, RDimLinearEntity* v);
      static RDimLinearEntity* js2cpp_RDimLinearEntity_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RDimLinearEntity_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RDimOrdinateEntity(RJSApi& handler, RDimOrdinateEntity* v);
      static RDimOrdinateEntity* js2cpp_RDimOrdinateEntity_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RDimOrdinateEntity_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RDimRadialEntity(RJSApi& handler, RDimRadialEntity* v);
      static RDimRadialEntity* js2cpp_RDimRadialEntity_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RDimRadialEntity_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RDimRotatedEntity(RJSApi& handler, RDimRotatedEntity* v);
      static RDimRotatedEntity* js2cpp_RDimRotatedEntity_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RDimRotatedEntity_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RDimStyle(RJSApi& handler, RDimStyle* v);
      static RDimStyle* js2cpp_RDimStyle_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RDimStyle_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RDimensionData(RJSApi& handler, RDimensionData* v);
      static RDimensionData* js2cpp_RDimensionData_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RDimensionData_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RDimensionEntity(RJSApi& handler, RDimensionEntity* v);
      static RDimensionEntity* js2cpp_RDimensionEntity_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RDimensionEntity_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RDirected(RJSApi& handler, RDirected* v);
      static RDirected* js2cpp_RDirected_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RDirected_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RDocument(RJSApi& handler, RDocument* v);
      static RDocument* js2cpp_RDocument_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RDocument_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RDocumentInterface(RJSApi& handler, RDocumentInterface* v);
      static RDocumentInterface* js2cpp_RDocumentInterface_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RDocumentInterface_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RDocumentVariables(RJSApi& handler, RDocumentVariables* v);
      static RDocumentVariables* js2cpp_RDocumentVariables_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RDocumentVariables_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_REllipseEntity(RJSApi& handler, REllipseEntity* v);
      static REllipseEntity* js2cpp_REllipseEntity_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_REllipseEntity_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_REntity(RJSApi& handler, REntity* v);
      static REntity* js2cpp_REntity_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_REntity_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_REntityData(RJSApi& handler, REntityData* v);
      static REntityData* js2cpp_REntityData_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_REntityData_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_REntityExportListener(RJSApi& handler, REntityExportListener* v);
      static REntityExportListener* js2cpp_REntityExportListener_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_REntityExportListener_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_REntityPickEvent(RJSApi& handler, REntityPickEvent* v);
      static REntityPickEvent* js2cpp_REntityPickEvent_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_REntityPickEvent_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RExplodable(RJSApi& handler, RExplodable* v);
      static RExplodable* js2cpp_RExplodable_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RExplodable_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RExportListener(RJSApi& handler, RExportListener* v);
      static RExportListener* js2cpp_RExportListener_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RExportListener_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RExporter(RJSApi& handler, RExporter* v);
      static RExporter* js2cpp_RExporter_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RExporter_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RFaceEntity(RJSApi& handler, RFaceEntity* v);
      static RFaceEntity* js2cpp_RFaceEntity_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RFaceEntity_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RFileExporter(RJSApi& handler, RFileExporter* v);
      static RFileExporter* js2cpp_RFileExporter_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RFileExporter_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RFileExporterFactory(RJSApi& handler, RFileExporterFactory* v);
      static RFileExporterFactory* js2cpp_RFileExporterFactory_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RFileExporterFactory_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RFileImporter(RJSApi& handler, RFileImporter* v);
      static RFileImporter* js2cpp_RFileImporter_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RFileImporter_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RFileImporterFactory(RJSApi& handler, RFileImporterFactory* v);
      static RFileImporterFactory* js2cpp_RFileImporterFactory_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RFileImporterFactory_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RFocusListener(RJSApi& handler, RFocusListener* v);
      static RFocusListener* js2cpp_RFocusListener_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RFocusListener_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RGraphicsScene(RJSApi& handler, RGraphicsScene* v);
      static RGraphicsScene* js2cpp_RGraphicsScene_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RGraphicsScene_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RGraphicsSceneQt(RJSApi& handler, RGraphicsSceneQt* v);
      static RGraphicsSceneQt* js2cpp_RGraphicsSceneQt_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RGraphicsSceneQt_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RGraphicsView(RJSApi& handler, RGraphicsView* v);
      static RGraphicsView* js2cpp_RGraphicsView_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RGraphicsView_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RGrid(RJSApi& handler, RGrid* v);
      static RGrid* js2cpp_RGrid_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RGrid_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RHatchEntity(RJSApi& handler, RHatchEntity* v);
      static RHatchEntity* js2cpp_RHatchEntity_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RHatchEntity_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RImageEntity(RJSApi& handler, RImageEntity* v);
      static RImageEntity* js2cpp_RImageEntity_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RImageEntity_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RImportListener(RJSApi& handler, RImportListener* v);
      static RImportListener* js2cpp_RImportListener_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RImportListener_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RImporter(RJSApi& handler, RImporter* v);
      static RImporter* js2cpp_RImporter_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RImporter_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RInputEvent(RJSApi& handler, RInputEvent* v);
      static RInputEvent* js2cpp_RInputEvent_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RInputEvent_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RInterTransactionListener(RJSApi& handler, RInterTransactionListener* v);
      static RInterTransactionListener* js2cpp_RInterTransactionListener_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RInterTransactionListener_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RKeyListener(RJSApi& handler, RKeyListener* v);
      static RKeyListener* js2cpp_RKeyListener_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RKeyListener_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RLayer(RJSApi& handler, RLayer* v);
      static RLayer* js2cpp_RLayer_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RLayer_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RLayerListener(RJSApi& handler, RLayerListener* v);
      static RLayerListener* js2cpp_RLayerListener_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RLayerListener_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RLayerState(RJSApi& handler, RLayerState* v);
      static RLayerState* js2cpp_RLayerState_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RLayerState_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RLayout(RJSApi& handler, RLayout* v);
      static RLayout* js2cpp_RLayout_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RLayout_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RLeaderEntity(RJSApi& handler, RLeaderEntity* v);
      static RLeaderEntity* js2cpp_RLeaderEntity_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RLeaderEntity_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RLineEntity(RJSApi& handler, RLineEntity* v);
      static RLineEntity* js2cpp_RLineEntity_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RLineEntity_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RLinetype(RJSApi& handler, RLinetype* v);
      static RLinetype* js2cpp_RLinetype_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RLinetype_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RMainWindow(RJSApi& handler, RMainWindow* v);
      static RMainWindow* js2cpp_RMainWindow_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RMainWindow_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RMemoryStorage(RJSApi& handler, RMemoryStorage* v);
      static RMemoryStorage* js2cpp_RMemoryStorage_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RMemoryStorage_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RMessageHandler(RJSApi& handler, RMessageHandler* v);
      static RMessageHandler* js2cpp_RMessageHandler_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RMessageHandler_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RMixedOperation(RJSApi& handler, RMixedOperation* v);
      static RMixedOperation* js2cpp_RMixedOperation_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RMixedOperation_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RModifiedListener(RJSApi& handler, RModifiedListener* v);
      static RModifiedListener* js2cpp_RModifiedListener_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RModifiedListener_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RModifyObjectOperation(RJSApi& handler, RModifyObjectOperation* v);
      static RModifyObjectOperation* js2cpp_RModifyObjectOperation_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RModifyObjectOperation_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RModifyObjectsOperation(RJSApi& handler, RModifyObjectsOperation* v);
      static RModifyObjectsOperation* js2cpp_RModifyObjectsOperation_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RModifyObjectsOperation_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RMouseEvent(RJSApi& handler, RMouseEvent* v);
      static RMouseEvent* js2cpp_RMouseEvent_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RMouseEvent_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RMoveReferencePointOperation(RJSApi& handler, RMoveReferencePointOperation* v);
      static RMoveReferencePointOperation* js2cpp_RMoveReferencePointOperation_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RMoveReferencePointOperation_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RMoveSelectionOperation(RJSApi& handler, RMoveSelectionOperation* v);
      static RMoveSelectionOperation* js2cpp_RMoveSelectionOperation_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RMoveSelectionOperation_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RNewDocumentListener(RJSApi& handler, RNewDocumentListener* v);
      static RNewDocumentListener* js2cpp_RNewDocumentListener_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RNewDocumentListener_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RObject(RJSApi& handler, RObject* v);
      static RObject* js2cpp_RObject_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RObject_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_ROperation(RJSApi& handler, ROperation* v);
      static ROperation* js2cpp_ROperation_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_ROperation_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_ROperationUtils(RJSApi& handler, ROperationUtils* v);
      static ROperationUtils* js2cpp_ROperationUtils_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_ROperationUtils_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_ROrthoGrid(RJSApi& handler, ROrthoGrid* v);
      static ROrthoGrid* js2cpp_ROrthoGrid_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_ROrthoGrid_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RPaletteListener(RJSApi& handler, RPaletteListener* v);
      static RPaletteListener* js2cpp_RPaletteListener_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RPaletteListener_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RPasteOperation(RJSApi& handler, RPasteOperation* v);
      static RPasteOperation* js2cpp_RPasteOperation_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RPasteOperation_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RPenListener(RJSApi& handler, RPenListener* v);
      static RPenListener* js2cpp_RPenListener_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RPenListener_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RPluginInterface(RJSApi& handler, RPluginInterface* v);
      static RPluginInterface* js2cpp_RPluginInterface_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RPluginInterface_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RPointEntity(RJSApi& handler, RPointEntity* v);
      static RPointEntity* js2cpp_RPointEntity_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RPointEntity_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RPolylineEntity(RJSApi& handler, RPolylineEntity* v);
      static RPolylineEntity* js2cpp_RPolylineEntity_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RPolylineEntity_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RPreferencesListener(RJSApi& handler, RPreferencesListener* v);
      static RPreferencesListener* js2cpp_RPreferencesListener_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RPreferencesListener_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RProgressHandler(RJSApi& handler, RProgressHandler* v);
      static RProgressHandler* js2cpp_RProgressHandler_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RProgressHandler_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RPropertyEditor(RJSApi& handler, RPropertyEditor* v);
      static RPropertyEditor* js2cpp_RPropertyEditor_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RPropertyEditor_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RPropertyEvent(RJSApi& handler, RPropertyEvent* v);
      static RPropertyEvent* js2cpp_RPropertyEvent_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RPropertyEvent_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RPropertyListener(RJSApi& handler, RPropertyListener* v);
      static RPropertyListener* js2cpp_RPropertyListener_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RPropertyListener_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RRayEntity(RJSApi& handler, RRayEntity* v);
      static RRayEntity* js2cpp_RRayEntity_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RRayEntity_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RRestrictAngleLength(RJSApi& handler, RRestrictAngleLength* v);
      static RRestrictAngleLength* js2cpp_RRestrictAngleLength_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RRestrictAngleLength_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RRestrictHorizontal(RJSApi& handler, RRestrictHorizontal* v);
      static RRestrictHorizontal* js2cpp_RRestrictHorizontal_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RRestrictHorizontal_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RRestrictOff(RJSApi& handler, RRestrictOff* v);
      static RRestrictOff* js2cpp_RRestrictOff_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RRestrictOff_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RRestrictOrthogonal(RJSApi& handler, RRestrictOrthogonal* v);
      static RRestrictOrthogonal* js2cpp_RRestrictOrthogonal_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RRestrictOrthogonal_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RRestrictVertical(RJSApi& handler, RRestrictVertical* v);
      static RRestrictVertical* js2cpp_RRestrictVertical_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RRestrictVertical_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RRuler(RJSApi& handler, RRuler* v);
      static RRuler* js2cpp_RRuler_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RRuler_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RScaleSelectionOperation(RJSApi& handler, RScaleSelectionOperation* v);
      static RScaleSelectionOperation* js2cpp_RScaleSelectionOperation_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RScaleSelectionOperation_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RSelectionListener(RJSApi& handler, RSelectionListener* v);
      static RSelectionListener* js2cpp_RSelectionListener_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RSelectionListener_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RSnap(RJSApi& handler, RSnap* v);
      static RSnap* js2cpp_RSnap_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RSnap_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RSnapAuto(RJSApi& handler, RSnapAuto* v);
      static RSnapAuto* js2cpp_RSnapAuto_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RSnapAuto_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RSnapCenter(RJSApi& handler, RSnapCenter* v);
      static RSnapCenter* js2cpp_RSnapCenter_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RSnapCenter_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RSnapDistance(RJSApi& handler, RSnapDistance* v);
      static RSnapDistance* js2cpp_RSnapDistance_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RSnapDistance_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RSnapEnd(RJSApi& handler, RSnapEnd* v);
      static RSnapEnd* js2cpp_RSnapEnd_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RSnapEnd_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RSnapEntityBase(RJSApi& handler, RSnapEntityBase* v);
      static RSnapEntityBase* js2cpp_RSnapEntityBase_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RSnapEntityBase_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RSnapFree(RJSApi& handler, RSnapFree* v);
      static RSnapFree* js2cpp_RSnapFree_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RSnapFree_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RSnapGrid(RJSApi& handler, RSnapGrid* v);
      static RSnapGrid* js2cpp_RSnapGrid_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RSnapGrid_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RSnapIntersection(RJSApi& handler, RSnapIntersection* v);
      static RSnapIntersection* js2cpp_RSnapIntersection_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RSnapIntersection_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RSnapListener(RJSApi& handler, RSnapListener* v);
      static RSnapListener* js2cpp_RSnapListener_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RSnapListener_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RSnapMiddle(RJSApi& handler, RSnapMiddle* v);
      static RSnapMiddle* js2cpp_RSnapMiddle_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RSnapMiddle_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RSnapOnEntity(RJSApi& handler, RSnapOnEntity* v);
      static RSnapOnEntity* js2cpp_RSnapOnEntity_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RSnapOnEntity_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RSnapPerpendicular(RJSApi& handler, RSnapPerpendicular* v);
      static RSnapPerpendicular* js2cpp_RSnapPerpendicular_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RSnapPerpendicular_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RSnapReference(RJSApi& handler, RSnapReference* v);
      static RSnapReference* js2cpp_RSnapReference_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RSnapReference_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RSnapRestriction(RJSApi& handler, RSnapRestriction* v);
      static RSnapRestriction* js2cpp_RSnapRestriction_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RSnapRestriction_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RSnapTangential(RJSApi& handler, RSnapTangential* v);
      static RSnapTangential* js2cpp_RSnapTangential_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RSnapTangential_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RSolidEntity(RJSApi& handler, RSolidEntity* v);
      static RSolidEntity* js2cpp_RSolidEntity_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RSolidEntity_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RSpatialIndex(RJSApi& handler, RSpatialIndex* v);
      static RSpatialIndex* js2cpp_RSpatialIndex_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RSpatialIndex_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RSpatialIndexSimple(RJSApi& handler, RSpatialIndexSimple* v);
      static RSpatialIndexSimple* js2cpp_RSpatialIndexSimple_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RSpatialIndexSimple_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RSpatialIndexVisitor(RJSApi& handler, RSpatialIndexVisitor* v);
      static RSpatialIndexVisitor* js2cpp_RSpatialIndexVisitor_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RSpatialIndexVisitor_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RSplineEntity(RJSApi& handler, RSplineEntity* v);
      static RSplineEntity* js2cpp_RSplineEntity_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RSplineEntity_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RStorage(RJSApi& handler, RStorage* v);
      static RStorage* js2cpp_RStorage_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RStorage_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RTabletEvent(RJSApi& handler, RTabletEvent* v);
      static RTabletEvent* js2cpp_RTabletEvent_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RTabletEvent_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RTerminateEvent(RJSApi& handler, RTerminateEvent* v);
      static RTerminateEvent* js2cpp_RTerminateEvent_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RTerminateEvent_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RTextBasedEntity(RJSApi& handler, RTextBasedEntity* v);
      static RTextBasedEntity* js2cpp_RTextBasedEntity_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RTextBasedEntity_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RTextEntity(RJSApi& handler, RTextEntity* v);
      static RTextEntity* js2cpp_RTextEntity_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RTextEntity_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RTextRenderer(RJSApi& handler, RTextRenderer* v);
      static RTextRenderer* js2cpp_RTextRenderer_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RTextRenderer_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RToleranceEntity(RJSApi& handler, RToleranceEntity* v);
      static RToleranceEntity* js2cpp_RToleranceEntity_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RToleranceEntity_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RTraceEntity(RJSApi& handler, RTraceEntity* v);
      static RTraceEntity* js2cpp_RTraceEntity_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RTraceEntity_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RTransaction(RJSApi& handler, RTransaction* v);
      static RTransaction* js2cpp_RTransaction_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RTransaction_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RTransactionListener(RJSApi& handler, RTransactionListener* v);
      static RTransactionListener* js2cpp_RTransactionListener_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RTransactionListener_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RTransactionStack(RJSApi& handler, RTransactionStack* v);
      static RTransactionStack* js2cpp_RTransactionStack_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RTransactionStack_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RTransformation(RJSApi& handler, RTransformation* v);
      static RTransformation* js2cpp_RTransformation_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RTransformation_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RTranslation(RJSApi& handler, RTranslation* v);
      static RTranslation* js2cpp_RTranslation_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RTranslation_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RUcs(RJSApi& handler, RUcs* v);
      static RUcs* js2cpp_RUcs_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RUcs_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RUcsListener(RJSApi& handler, RUcsListener* v);
      static RUcsListener* js2cpp_RUcsListener_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RUcsListener_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RView(RJSApi& handler, RView* v);
      static RView* js2cpp_RView_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RView_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RViewFocusListener(RJSApi& handler, RViewFocusListener* v);
      static RViewFocusListener* js2cpp_RViewFocusListener_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RViewFocusListener_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RViewListener(RJSApi& handler, RViewListener* v);
      static RViewListener* js2cpp_RViewListener_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RViewListener_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RViewportEntity(RJSApi& handler, RViewportEntity* v);
      static RViewportEntity* js2cpp_RViewportEntity_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RViewportEntity_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RWheelEvent(RJSApi& handler, RWheelEvent* v);
      static RWheelEvent* js2cpp_RWheelEvent_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RWheelEvent_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RXLineEntity(RJSApi& handler, RXLineEntity* v);
      static RXLineEntity* js2cpp_RXLineEntity_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RXLineEntity_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
  // ------------------------------
  // wrapped QObject pointer types:
  // ------------------------------
  
      static QJSValue cpp2js_RBlockListenerAdapter(RJSApi& handler, RBlockListenerAdapter* v);
      static QJSValue cpp2js_RBlockListenerAdapter(RJSApi& handler, const RBlockListenerAdapter* v);
      static RBlockListenerAdapter* js2cpp_RBlockListenerAdapter_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RBlockListenerAdapter_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RCadToolBar(RJSApi& handler, RCadToolBar* v);
      static QJSValue cpp2js_RCadToolBar(RJSApi& handler, const RCadToolBar* v);
      static RCadToolBar* js2cpp_RCadToolBar_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RCadToolBar_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RCadToolBarPanel(RJSApi& handler, RCadToolBarPanel* v);
      static QJSValue cpp2js_RCadToolBarPanel(RJSApi& handler, const RCadToolBarPanel* v);
      static RCadToolBarPanel* js2cpp_RCadToolBarPanel_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RCadToolBarPanel_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RCharacterWidget(RJSApi& handler, RCharacterWidget* v);
      static QJSValue cpp2js_RCharacterWidget(RJSApi& handler, const RCharacterWidget* v);
      static RCharacterWidget* js2cpp_RCharacterWidget_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RCharacterWidget_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RColorCombo(RJSApi& handler, RColorCombo* v);
      static QJSValue cpp2js_RColorCombo(RJSApi& handler, const RColorCombo* v);
      static RColorCombo* js2cpp_RColorCombo_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RColorCombo_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RCommandLine(RJSApi& handler, RCommandLine* v);
      static QJSValue cpp2js_RCommandLine(RJSApi& handler, const RCommandLine* v);
      static RCommandLine* js2cpp_RCommandLine_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RCommandLine_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RCoordinateListenerAdapter(RJSApi& handler, RCoordinateListenerAdapter* v);
      static QJSValue cpp2js_RCoordinateListenerAdapter(RJSApi& handler, const RCoordinateListenerAdapter* v);
      static RCoordinateListenerAdapter* js2cpp_RCoordinateListenerAdapter_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RCoordinateListenerAdapter_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RDockWidget(RJSApi& handler, RDockWidget* v);
      static QJSValue cpp2js_RDockWidget(RJSApi& handler, const RDockWidget* v);
      static RDockWidget* js2cpp_RDockWidget_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RDockWidget_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_REventFilter(RJSApi& handler, REventFilter* v);
      static QJSValue cpp2js_REventFilter(RJSApi& handler, const REventFilter* v);
      static REventFilter* js2cpp_REventFilter_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_REventFilter_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_REventHandler(RJSApi& handler, REventHandler* v);
      static QJSValue cpp2js_REventHandler(RJSApi& handler, const REventHandler* v);
      static REventHandler* js2cpp_REventHandler_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_REventHandler_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RFileSystemModel(RJSApi& handler, RFileSystemModel* v);
      static QJSValue cpp2js_RFileSystemModel(RJSApi& handler, const RFileSystemModel* v);
      static RFileSystemModel* js2cpp_RFileSystemModel_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RFileSystemModel_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RFlowLayout(RJSApi& handler, RFlowLayout* v);
      static QJSValue cpp2js_RFlowLayout(RJSApi& handler, const RFlowLayout* v);
      static RFlowLayout* js2cpp_RFlowLayout_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RFlowLayout_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RFocusListenerAdapter(RJSApi& handler, RFocusListenerAdapter* v);
      static QJSValue cpp2js_RFocusListenerAdapter(RJSApi& handler, const RFocusListenerAdapter* v);
      static RFocusListenerAdapter* js2cpp_RFocusListenerAdapter_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RFocusListenerAdapter_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RFontChooserWidget(RJSApi& handler, RFontChooserWidget* v);
      static QJSValue cpp2js_RFontChooserWidget(RJSApi& handler, const RFontChooserWidget* v);
      static RFontChooserWidget* js2cpp_RFontChooserWidget_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RFontChooserWidget_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RGraphicsViewQt(RJSApi& handler, RGraphicsViewQt* v);
      static QJSValue cpp2js_RGraphicsViewQt(RJSApi& handler, const RGraphicsViewQt* v);
      static RGraphicsViewQt* js2cpp_RGraphicsViewQt_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RGraphicsViewQt_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RGraphicsViewImage(RJSApi& handler, RGraphicsViewImage* v);
      static QJSValue cpp2js_RGraphicsViewImage(RJSApi& handler, const RGraphicsViewImage* v);
      static RGraphicsViewImage* js2cpp_RGraphicsViewImage_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RGraphicsViewImage_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RGuiAction(RJSApi& handler, RGuiAction* v);
      static QJSValue cpp2js_RGuiAction(RJSApi& handler, const RGuiAction* v);
      static RGuiAction* js2cpp_RGuiAction_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RGuiAction_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RInterTransactionListenerAdapter(RJSApi& handler, RInterTransactionListenerAdapter* v);
      static QJSValue cpp2js_RInterTransactionListenerAdapter(RJSApi& handler, const RInterTransactionListenerAdapter* v);
      static RInterTransactionListenerAdapter* js2cpp_RInterTransactionListenerAdapter_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RInterTransactionListenerAdapter_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RKeyListenerAdapter(RJSApi& handler, RKeyListenerAdapter* v);
      static QJSValue cpp2js_RKeyListenerAdapter(RJSApi& handler, const RKeyListenerAdapter* v);
      static RKeyListenerAdapter* js2cpp_RKeyListenerAdapter_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RKeyListenerAdapter_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RLayerListenerAdapter(RJSApi& handler, RLayerListenerAdapter* v);
      static QJSValue cpp2js_RLayerListenerAdapter(RJSApi& handler, const RLayerListenerAdapter* v);
      static RLayerListenerAdapter* js2cpp_RLayerListenerAdapter_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RLayerListenerAdapter_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RLinetypeCombo(RJSApi& handler, RLinetypeCombo* v);
      static QJSValue cpp2js_RLinetypeCombo(RJSApi& handler, const RLinetypeCombo* v);
      static RLinetypeCombo* js2cpp_RLinetypeCombo_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RLinetypeCombo_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RLineweightCombo(RJSApi& handler, RLineweightCombo* v);
      static QJSValue cpp2js_RLineweightCombo(RJSApi& handler, const RLineweightCombo* v);
      static RLineweightCombo* js2cpp_RLineweightCombo_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RLineweightCombo_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RListView(RJSApi& handler, RListView* v);
      static QJSValue cpp2js_RListView(RJSApi& handler, const RListView* v);
      static RListView* js2cpp_RListView_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RListView_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RListWidget(RJSApi& handler, RListWidget* v);
      static QJSValue cpp2js_RListWidget(RJSApi& handler, const RListWidget* v);
      static RListWidget* js2cpp_RListWidget_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RListWidget_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RMainWindowQt(RJSApi& handler, RMainWindowQt* v);
      static QJSValue cpp2js_RMainWindowQt(RJSApi& handler, const RMainWindowQt* v);
      static RMainWindowQt* js2cpp_RMainWindowQt_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RMainWindowQt_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RMathComboBox(RJSApi& handler, RMathComboBox* v);
      static QJSValue cpp2js_RMathComboBox(RJSApi& handler, const RMathComboBox* v);
      static RMathComboBox* js2cpp_RMathComboBox_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RMathComboBox_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RMathLineEdit(RJSApi& handler, RMathLineEdit* v);
      static QJSValue cpp2js_RMathLineEdit(RJSApi& handler, const RMathLineEdit* v);
      static RMathLineEdit* js2cpp_RMathLineEdit_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RMathLineEdit_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RMdiArea(RJSApi& handler, RMdiArea* v);
      static QJSValue cpp2js_RMdiArea(RJSApi& handler, const RMdiArea* v);
      static RMdiArea* js2cpp_RMdiArea_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RMdiArea_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RMdiChildQt(RJSApi& handler, RMdiChildQt* v);
      static QJSValue cpp2js_RMdiChildQt(RJSApi& handler, const RMdiChildQt* v);
      static RMdiChildQt* js2cpp_RMdiChildQt_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RMdiChildQt_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RPaletteListenerAdapter(RJSApi& handler, RPaletteListenerAdapter* v);
      static QJSValue cpp2js_RPaletteListenerAdapter(RJSApi& handler, const RPaletteListenerAdapter* v);
      static RPaletteListenerAdapter* js2cpp_RPaletteListenerAdapter_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RPaletteListenerAdapter_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RPenListenerAdapter(RJSApi& handler, RPenListenerAdapter* v);
      static QJSValue cpp2js_RPenListenerAdapter(RJSApi& handler, const RPenListenerAdapter* v);
      static RPenListenerAdapter* js2cpp_RPenListenerAdapter_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RPenListenerAdapter_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RPreferencesListenerAdapter(RJSApi& handler, RPreferencesListenerAdapter* v);
      static QJSValue cpp2js_RPreferencesListenerAdapter(RJSApi& handler, const RPreferencesListenerAdapter* v);
      static RPreferencesListenerAdapter* js2cpp_RPreferencesListenerAdapter_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RPreferencesListenerAdapter_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RPropertyListenerAdapter(RJSApi& handler, RPropertyListenerAdapter* v);
      static QJSValue cpp2js_RPropertyListenerAdapter(RJSApi& handler, const RPropertyListenerAdapter* v);
      static RPropertyListenerAdapter* js2cpp_RPropertyListenerAdapter_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RPropertyListenerAdapter_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RRulerQt(RJSApi& handler, RRulerQt* v);
      static QJSValue cpp2js_RRulerQt(RJSApi& handler, const RRulerQt* v);
      static RRulerQt* js2cpp_RRulerQt_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RRulerQt_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RSelectionListenerAdapter(RJSApi& handler, RSelectionListenerAdapter* v);
      static QJSValue cpp2js_RSelectionListenerAdapter(RJSApi& handler, const RSelectionListenerAdapter* v);
      static RSelectionListenerAdapter* js2cpp_RSelectionListenerAdapter_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RSelectionListenerAdapter_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RSingleApplication(RJSApi& handler, RSingleApplication* v);
      static QJSValue cpp2js_RSingleApplication(RJSApi& handler, const RSingleApplication* v);
      static RSingleApplication* js2cpp_RSingleApplication_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RSingleApplication_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RTextEdit(RJSApi& handler, RTextEdit* v);
      static QJSValue cpp2js_RTextEdit(RJSApi& handler, const RTextEdit* v);
      static RTextEdit* js2cpp_RTextEdit_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RTextEdit_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RToolButton(RJSApi& handler, RToolButton* v);
      static QJSValue cpp2js_RToolButton(RJSApi& handler, const RToolButton* v);
      static RToolButton* js2cpp_RToolButton_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RToolButton_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RToolMatrixItemDelegate(RJSApi& handler, RToolMatrixItemDelegate* v);
      static QJSValue cpp2js_RToolMatrixItemDelegate(RJSApi& handler, const RToolMatrixItemDelegate* v);
      static RToolMatrixItemDelegate* js2cpp_RToolMatrixItemDelegate_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RToolMatrixItemDelegate_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RTransactionListenerAdapter(RJSApi& handler, RTransactionListenerAdapter* v);
      static QJSValue cpp2js_RTransactionListenerAdapter(RJSApi& handler, const RTransactionListenerAdapter* v);
      static RTransactionListenerAdapter* js2cpp_RTransactionListenerAdapter_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RTransactionListenerAdapter_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RTreeWidget(RJSApi& handler, RTreeWidget* v);
      static QJSValue cpp2js_RTreeWidget(RJSApi& handler, const RTreeWidget* v);
      static RTreeWidget* js2cpp_RTreeWidget_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RTreeWidget_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RViewListenerAdapter(RJSApi& handler, RViewListenerAdapter* v);
      static QJSValue cpp2js_RViewListenerAdapter(RJSApi& handler, const RViewListenerAdapter* v);
      static RViewListenerAdapter* js2cpp_RViewListenerAdapter_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RViewListenerAdapter_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_RWidget(RJSApi& handler, RWidget* v);
      static QJSValue cpp2js_RWidget(RJSApi& handler, const RWidget* v);
      static RWidget* js2cpp_RWidget_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_RWidget_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
  // ------------
  // QList types:
  // ------------
  
      static QJSValue cpp2js_QList_RArc(RJSApi& handler, const QList<RArc>& v);
      static QList<RArc> js2cpp_QList_RArc(RJSApi& handler, const QJSValue& v);
      static bool is_QList_RArc(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QList_RBlock_Id(RJSApi& handler, const QList<RBlock::Id>& v);
      static QList<RBlock::Id> js2cpp_QList_RBlock_Id(RJSApi& handler, const QJSValue& v);
      static bool is_QList_RBlock_Id(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QList_RBox(RJSApi& handler, const QList<RBox>& v);
      static QList<RBox> js2cpp_QList_RBox(RJSApi& handler, const QJSValue& v);
      static bool is_QList_RBox(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QList_RColor(RJSApi& handler, const QList<RColor>& v);
      static QList<RColor> js2cpp_QList_RColor(RJSApi& handler, const QJSValue& v);
      static bool is_QList_RColor(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QList_REntity_Id(RJSApi& handler, const QList<REntity::Id>& v);
      static QList<REntity::Id> js2cpp_QList_REntity_Id(RJSApi& handler, const QJSValue& v);
      static bool is_QList_REntity_Id(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QList_RGraphicsSceneDrawable(RJSApi& handler, const QList<RGraphicsSceneDrawable>& v);
      static QList<RGraphicsSceneDrawable> js2cpp_QList_RGraphicsSceneDrawable(RJSApi& handler, const QJSValue& v);
      static bool is_QList_RGraphicsSceneDrawable(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QList_RLayer_Id(RJSApi& handler, const QList<RLayer::Id>& v);
      static QList<RLayer::Id> js2cpp_QList_RLayer_Id(RJSApi& handler, const QJSValue& v);
      static bool is_QList_RLayer_Id(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QList_RLine(RJSApi& handler, const QList<RLine>& v);
      static QList<RLine> js2cpp_QList_RLine(RJSApi& handler, const QJSValue& v);
      static bool is_QList_RLine(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QList_RLinetypePattern(RJSApi& handler, const QList<RLinetypePattern>& v);
      static QList<RLinetypePattern> js2cpp_QList_RLinetypePattern(RJSApi& handler, const QJSValue& v);
      static bool is_QList_RLinetypePattern(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QList_RObject_Id(RJSApi& handler, const QList<RObject::Id>& v);
      static QList<RObject::Id> js2cpp_QList_RObject_Id(RJSApi& handler, const QJSValue& v);
      static bool is_QList_RObject_Id(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QList_RPainterPath(RJSApi& handler, const QList<RPainterPath>& v);
      static QList<RPainterPath> js2cpp_QList_RPainterPath(RJSApi& handler, const QJSValue& v);
      static bool is_QList_RPainterPath(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QList_RPatternLine(RJSApi& handler, const QList<RPatternLine>& v);
      static QList<RPatternLine> js2cpp_QList_RPatternLine(RJSApi& handler, const QJSValue& v);
      static bool is_QList_RPatternLine(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QList_RPolyline(RJSApi& handler, const QList<RPolyline>& v);
      static QList<RPolyline> js2cpp_QList_RPolyline(RJSApi& handler, const QJSValue& v);
      static bool is_QList_RPolyline(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QList_RPropertyChange(RJSApi& handler, const QList<RPropertyChange>& v);
      static QList<RPropertyChange> js2cpp_QList_RPropertyChange(RJSApi& handler, const QJSValue& v);
      static bool is_QList_RPropertyChange(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QList_RPropertyTypeId(RJSApi& handler, const QList<RPropertyTypeId>& v);
      static QList<RPropertyTypeId> js2cpp_QList_RPropertyTypeId(RJSApi& handler, const QJSValue& v);
      static bool is_QList_RPropertyTypeId(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QList_RRefPoint(RJSApi& handler, const QList<RRefPoint>& v);
      static QList<RRefPoint> js2cpp_QList_RRefPoint(RJSApi& handler, const QJSValue& v);
      static bool is_QList_RRefPoint(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QList_RS_EntityType(RJSApi& handler, const QList<RS::EntityType>& v);
      static QList<RS::EntityType> js2cpp_QList_RS_EntityType(RJSApi& handler, const QJSValue& v);
      static bool is_QList_RS_EntityType(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QList_RSpline(RJSApi& handler, const QList<RSpline>& v);
      static QList<RSpline> js2cpp_QList_RSpline(RJSApi& handler, const QJSValue& v);
      static bool is_QList_RSpline(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QList_RTextBasedData(RJSApi& handler, const QList<RTextBasedData>& v);
      static QList<RTextBasedData> js2cpp_QList_RTextBasedData(RJSApi& handler, const QJSValue& v);
      static bool is_QList_RTextBasedData(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QList_RTextData(RJSApi& handler, const QList<RTextData>& v);
      static QList<RTextData> js2cpp_QList_RTextData(RJSApi& handler, const QJSValue& v);
      static bool is_QList_RTextData(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QList_RTextLabel(RJSApi& handler, const QList<RTextLabel>& v);
      static QList<RTextLabel> js2cpp_QList_RTextLabel(RJSApi& handler, const QJSValue& v);
      static bool is_QList_RTextLabel(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QList_RTextLayout(RJSApi& handler, const QList<RTextLayout>& v);
      static QList<RTextLayout> js2cpp_QList_RTextLayout(RJSApi& handler, const QJSValue& v);
      static bool is_QList_RTextLayout(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QList_RTransaction(RJSApi& handler, const QList<RTransaction>& v);
      static QList<RTransaction> js2cpp_QList_RTransaction(RJSApi& handler, const QJSValue& v);
      static bool is_QList_RTransaction(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QList_RTransformOp(RJSApi& handler, const QList<RTransformOp>& v);
      static QList<RTransformOp> js2cpp_QList_RTransformOp(RJSApi& handler, const QJSValue& v);
      static bool is_QList_RTransformOp(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QList_RTriangle(RJSApi& handler, const QList<RTriangle>& v);
      static QList<RTriangle> js2cpp_QList_RTriangle(RJSApi& handler, const QJSValue& v);
      static bool is_QList_RTriangle(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QList_RVector(RJSApi& handler, const QList<RVector>& v);
      static QList<RVector> js2cpp_QList_RVector(RJSApi& handler, const QJSValue& v);
      static bool is_QList_RVector(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
  // --------------------
  // QList pointer types:
  // --------------------
  
      static QJSValue cpp2js_QList_RGraphicsScene_ptr(RJSApi& handler, const QList<RGraphicsScene*>& v);
      static QList<RGraphicsScene*> js2cpp_QList_RGraphicsScene_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QList_RGraphicsScene_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QList_RGraphicsView_ptr(RJSApi& handler, const QList<RGraphicsView*>& v);
      static QList<RGraphicsView*> js2cpp_QList_RGraphicsView_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QList_RGraphicsView_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QList_RGuiAction_ptr(RJSApi& handler, const QList<RGuiAction*>& v);
      static QList<RGuiAction*> js2cpp_QList_RGuiAction_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QList_RGuiAction_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QList_RTransaction_ptr(RJSApi& handler, const QList<RTransaction*>& v);
      static QList<RTransaction*> js2cpp_QList_RTransaction_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QList_RTransaction_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
  // ---------------------------
  // QList shared pointer types:
  // ---------------------------
  
      static QJSValue cpp2js_QList_QSharedPointer_RLayer(RJSApi& handler, const QList<QSharedPointer<RLayer>>& v);
      static QList<QSharedPointer<RLayer>> js2cpp_QList_QSharedPointer_RLayer(RJSApi& handler, const QJSValue& v);
      static bool is_QList_QSharedPointer_RLayer(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QList_QSharedPointer_RObject(RJSApi& handler, const QList<QSharedPointer<RObject>>& v);
      static QList<QSharedPointer<RObject>> js2cpp_QList_QSharedPointer_RObject(RJSApi& handler, const QJSValue& v);
      static bool is_QList_QSharedPointer_RObject(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QList_QSharedPointer_RShape(RJSApi& handler, const QList<QSharedPointer<RShape>>& v);
      static QList<QSharedPointer<RShape>> js2cpp_QList_QSharedPointer_RShape(RJSApi& handler, const QJSValue& v);
      static bool is_QList_QSharedPointer_RShape(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
  // -----------
  // QSet types:
  // -----------
  
      static QJSValue cpp2js_QSet_RBlock_Id(RJSApi& handler, const QSet<RBlock::Id>& v);
      static QSet<RBlock::Id> js2cpp_QSet_RBlock_Id(RJSApi& handler, const QJSValue& v);
      static bool is_QSet_RBlock_Id(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QSet_REntity_Id(RJSApi& handler, const QSet<REntity::Id>& v);
      static QSet<REntity::Id> js2cpp_QSet_REntity_Id(RJSApi& handler, const QJSValue& v);
      static bool is_QSet_REntity_Id(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QSet_RLayer_Id(RJSApi& handler, const QSet<RLayer::Id>& v);
      static QSet<RLayer::Id> js2cpp_QSet_RLayer_Id(RJSApi& handler, const QJSValue& v);
      static bool is_QSet_RLayer_Id(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QSet_RLayerState_Id(RJSApi& handler, const QSet<RLayerState::Id>& v);
      static QSet<RLayerState::Id> js2cpp_QSet_RLayerState_Id(RJSApi& handler, const QJSValue& v);
      static bool is_QSet_RLayerState_Id(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QSet_RLayout_Id(RJSApi& handler, const QSet<RLayout::Id>& v);
      static QSet<RLayout::Id> js2cpp_QSet_RLayout_Id(RJSApi& handler, const QJSValue& v);
      static bool is_QSet_RLayout_Id(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QSet_RLinetype_Id(RJSApi& handler, const QSet<RLinetype::Id>& v);
      static QSet<RLinetype::Id> js2cpp_QSet_RLinetype_Id(RJSApi& handler, const QJSValue& v);
      static bool is_QSet_RLinetype_Id(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QSet_RObject_Id(RJSApi& handler, const QSet<RObject::Id>& v);
      static QSet<RObject::Id> js2cpp_QSet_RObject_Id(RJSApi& handler, const QJSValue& v);
      static bool is_QSet_RObject_Id(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QSet_RPropertyTypeId(RJSApi& handler, const QSet<RPropertyTypeId>& v);
      static QSet<RPropertyTypeId> js2cpp_QSet_RPropertyTypeId(RJSApi& handler, const QJSValue& v);
      static bool is_QSet_RPropertyTypeId(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QSet_RUcs_Id(RJSApi& handler, const QSet<RUcs::Id>& v);
      static QSet<RUcs::Id> js2cpp_QSet_RUcs_Id(RJSApi& handler, const QJSValue& v);
      static bool is_QSet_RUcs_Id(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QSet_RView_Id(RJSApi& handler, const QSet<RView::Id>& v);
      static QSet<RView::Id> js2cpp_QSet_RView_Id(RJSApi& handler, const QJSValue& v);
      static bool is_QSet_RView_Id(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
  // -----------
  // QMap types:
  // -----------
  
  // ------------
  // QPair types:
  // ------------
  
      static QJSValue cpp2js_QPair_QVariant_RPropertyAttributes(RJSApi& handler, const QPair<QVariant,RPropertyAttributes>& v);
      static QPair<QVariant,RPropertyAttributes> js2cpp_QPair_QVariant_RPropertyAttributes(RJSApi& handler, const QJSValue& v);
      static bool is_QPair_QVariant_RPropertyAttributes(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
  // ------------
  // dummy types:
  // ------------
  
  // --------------------
  // dummy pointer types:
  // --------------------
  
      };




      
        // downcasters from QWidget to ...
        

          // downcasters from QWidget to RCharacterWidget
          class RJSDowncaster_QWidget_RCharacterWidget : public RJSDowncaster_QWidget {
              QJSValue downcast(RJSApi& handler, QWidget* o) {
                  RCharacterWidget* c = qobject_cast<RCharacterWidget*>(o);
                  if (c!=nullptr) {
                      return RJSHelper_qcad::cpp2js_RCharacterWidget(handler, c);
                  }
                  return QJSValue();
              }
          };

        

          // downcasters from QWidget to RFontChooserWidget
          class RJSDowncaster_QWidget_RFontChooserWidget : public RJSDowncaster_QWidget {
              QJSValue downcast(RJSApi& handler, QWidget* o) {
                  RFontChooserWidget* c = qobject_cast<RFontChooserWidget*>(o);
                  if (c!=nullptr) {
                      return RJSHelper_qcad::cpp2js_RFontChooserWidget(handler, c);
                  }
                  return QJSValue();
              }
          };

        

          // downcasters from QWidget to RGraphicsViewQt
          class RJSDowncaster_QWidget_RGraphicsViewQt : public RJSDowncaster_QWidget {
              QJSValue downcast(RJSApi& handler, QWidget* o) {
                  RGraphicsViewQt* c = qobject_cast<RGraphicsViewQt*>(o);
                  if (c!=nullptr) {
                      return RJSHelper_qcad::cpp2js_RGraphicsViewQt(handler, c);
                  }
                  return QJSValue();
              }
          };

        

          // downcasters from QWidget to RWidget
          class RJSDowncaster_QWidget_RWidget : public RJSDowncaster_QWidget {
              QJSValue downcast(RJSApi& handler, QWidget* o) {
                  RWidget* c = qobject_cast<RWidget*>(o);
                  if (c!=nullptr) {
                      return RJSHelper_qcad::cpp2js_RWidget(handler, c);
                  }
                  return QJSValue();
              }
          };

        



      #endif
    