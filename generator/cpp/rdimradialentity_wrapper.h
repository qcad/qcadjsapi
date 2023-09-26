
  // Auto generated
  
    #ifndef RDIMRADIALENTITY_H_WRAPPER
    #define RDIMRADIALENTITY_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "RJSHelper.h"
        #include "../RJSHelper_qcad.h"
      

    #include "RJSWrapperObj.h"
  
        #include "RDocument.h"
      
        #include "RExporter.h"
      
    #include <QQmlEngine>
    
        #include "RJSType_qcad.h"
      
        #include "RDimRadialEntity.h"
      
      // singleton class wrapper for static functions:
      class RDimRadialEntity_WrapperSingleton: public QObject {
      Q_OBJECT
      QML_INTERFACE

      // constants:
      

      // static properties:
      
  Q_PROPERTY(
    
    QJSValue
     INVALID_ID
        // auto generated read function for public static properties:
         READ  getINVALID_ID
  )

  Q_PROPERTY(
    
    QJSValue
     INVALID_HANDLE
        // auto generated read function for public static properties:
         READ  getINVALID_HANDLE
  )

  Q_PROPERTY(
    
    QJSValue
     PropertySelected
        // auto generated read function for public static properties:
         READ  getPropertySelected
  )

  Q_PROPERTY(
    
    QJSValue
     PropertyInvisible
        // auto generated read function for public static properties:
         READ  getPropertyInvisible
  )

  Q_PROPERTY(
    
    QJSValue
     PropertyParentId
        // auto generated read function for public static properties:
         READ  getPropertyParentId
  )

  Q_PROPERTY(
    
    QJSValue
     PropertyMinX
        // auto generated read function for public static properties:
         READ  getPropertyMinX
  )

  Q_PROPERTY(
    
    QJSValue
     PropertyMinY
        // auto generated read function for public static properties:
         READ  getPropertyMinY
  )

  Q_PROPERTY(
    
    QJSValue
     PropertyMaxX
        // auto generated read function for public static properties:
         READ  getPropertyMaxX
  )

  Q_PROPERTY(
    
    QJSValue
     PropertyMaxY
        // auto generated read function for public static properties:
         READ  getPropertyMaxY
  )

  Q_PROPERTY(
    
    QJSValue
     PropertySizeX
        // auto generated read function for public static properties:
         READ  getPropertySizeX
  )

  Q_PROPERTY(
    
    QJSValue
     PropertySizeY
        // auto generated read function for public static properties:
         READ  getPropertySizeY
  )

  Q_PROPERTY(
    
    QJSValue
     PropertyDefinitionPointX
        // auto generated read function for public static properties:
         READ  getPropertyDefinitionPointX
  )

  Q_PROPERTY(
    
    QJSValue
     PropertyDefinitionPointY
        // auto generated read function for public static properties:
         READ  getPropertyDefinitionPointY
  )

  Q_PROPERTY(
    
    QJSValue
     PropertyDefinitionPointZ
        // auto generated read function for public static properties:
         READ  getPropertyDefinitionPointZ
  )

  Q_PROPERTY(
    
    QJSValue
     PropertyAutoLabel
        // auto generated read function for public static properties:
         READ  getPropertyAutoLabel
  )

  Q_PROPERTY(
    
    QJSValue
     PropertyDimaunit
        // auto generated read function for public static properties:
         READ  getPropertyDimaunit
  )

  Q_PROPERTY(
    
    QJSValue
     PropertyDimadec
        // auto generated read function for public static properties:
         READ  getPropertyDimadec
  )

  Q_PROPERTY(
    
    QJSValue
     PropertyDimazin
        // auto generated read function for public static properties:
         READ  getPropertyDimazin
  )

  Q_PROPERTY(
    
    QJSValue
     PropertyCustom
        // auto generated read function for public static properties:
         READ  getPropertyCustom
  )

  Q_PROPERTY(
    
    QJSValue
     PropertyHandle
        // auto generated read function for public static properties:
         READ  getPropertyHandle
  )

  Q_PROPERTY(
    
    QJSValue
     PropertyProtected
        // auto generated read function for public static properties:
         READ  getPropertyProtected
  )

  Q_PROPERTY(
    
    QJSValue
     PropertyWorkingSet
        // auto generated read function for public static properties:
         READ  getPropertyWorkingSet
  )

  Q_PROPERTY(
    
    QJSValue
     PropertyType
        // auto generated read function for public static properties:
         READ  getPropertyType
  )

  Q_PROPERTY(
    
    QJSValue
     PropertyBlock
        // auto generated read function for public static properties:
         READ  getPropertyBlock
  )

  Q_PROPERTY(
    
    QJSValue
     PropertyLayer
        // auto generated read function for public static properties:
         READ  getPropertyLayer
  )

  Q_PROPERTY(
    
    QJSValue
     PropertyLinetype
        // auto generated read function for public static properties:
         READ  getPropertyLinetype
  )

  Q_PROPERTY(
    
    QJSValue
     PropertyLinetypeScale
        // auto generated read function for public static properties:
         READ  getPropertyLinetypeScale
  )

  Q_PROPERTY(
    
    QJSValue
     PropertyLineweight
        // auto generated read function for public static properties:
         READ  getPropertyLineweight
  )

  Q_PROPERTY(
    
    QJSValue
     PropertyColor
        // auto generated read function for public static properties:
         READ  getPropertyColor
  )

  Q_PROPERTY(
    
    QJSValue
     PropertyDisplayedColor
        // auto generated read function for public static properties:
         READ  getPropertyDisplayedColor
  )

  Q_PROPERTY(
    
    QJSValue
     PropertyDrawOrder
        // auto generated read function for public static properties:
         READ  getPropertyDrawOrder
  )

  Q_PROPERTY(
    
    QJSValue
     PropertyMiddleOfTextX
        // auto generated read function for public static properties:
         READ  getPropertyMiddleOfTextX
  )

  Q_PROPERTY(
    
    QJSValue
     PropertyMiddleOfTextY
        // auto generated read function for public static properties:
         READ  getPropertyMiddleOfTextY
  )

  Q_PROPERTY(
    
    QJSValue
     PropertyMiddleOfTextZ
        // auto generated read function for public static properties:
         READ  getPropertyMiddleOfTextZ
  )

  Q_PROPERTY(
    
    QJSValue
     PropertyText
        // auto generated read function for public static properties:
         READ  getPropertyText
  )

  Q_PROPERTY(
    
    QJSValue
     PropertyUpperTolerance
        // auto generated read function for public static properties:
         READ  getPropertyUpperTolerance
  )

  Q_PROPERTY(
    
    QJSValue
     PropertyLowerTolerance
        // auto generated read function for public static properties:
         READ  getPropertyLowerTolerance
  )

  Q_PROPERTY(
    
    QJSValue
     PropertyMeasuredValue
        // auto generated read function for public static properties:
         READ  getPropertyMeasuredValue
  )

  Q_PROPERTY(
    
    QJSValue
     PropertyDimscale
        // auto generated read function for public static properties:
         READ  getPropertyDimscale
  )

  Q_PROPERTY(
    
    QJSValue
     PropertyDimlfac
        // auto generated read function for public static properties:
         READ  getPropertyDimlfac
  )

  Q_PROPERTY(
    
    QJSValue
     PropertyDimtxt
        // auto generated read function for public static properties:
         READ  getPropertyDimtxt
  )

  Q_PROPERTY(
    
    QJSValue
     PropertyDimgap
        // auto generated read function for public static properties:
         READ  getPropertyDimgap
  )

  Q_PROPERTY(
    
    QJSValue
     PropertyDimasz
        // auto generated read function for public static properties:
         READ  getPropertyDimasz
  )

  Q_PROPERTY(
    
    QJSValue
     PropertyDimexe
        // auto generated read function for public static properties:
         READ  getPropertyDimexe
  )

  Q_PROPERTY(
    
    QJSValue
     PropertyDimexo
        // auto generated read function for public static properties:
         READ  getPropertyDimexo
  )

  Q_PROPERTY(
    
    QJSValue
     PropertyDimtad
        // auto generated read function for public static properties:
         READ  getPropertyDimtad
  )

  Q_PROPERTY(
    
    QJSValue
     PropertyDimtih
        // auto generated read function for public static properties:
         READ  getPropertyDimtih
  )

  Q_PROPERTY(
    
    QJSValue
     PropertyDimtsz
        // auto generated read function for public static properties:
         READ  getPropertyDimtsz
  )

  Q_PROPERTY(
    
    QJSValue
     PropertyDimlunit
        // auto generated read function for public static properties:
         READ  getPropertyDimlunit
  )

  Q_PROPERTY(
    
    QJSValue
     PropertyDimdec
        // auto generated read function for public static properties:
         READ  getPropertyDimdec
  )

  Q_PROPERTY(
    
    QJSValue
     PropertyDimdsep
        // auto generated read function for public static properties:
         READ  getPropertyDimdsep
  )

  Q_PROPERTY(
    
    QJSValue
     PropertyDimzin
        // auto generated read function for public static properties:
         READ  getPropertyDimzin
  )

  Q_PROPERTY(
    
    QJSValue
     PropertyArchTick
        // auto generated read function for public static properties:
         READ  getPropertyArchTick
  )

  Q_PROPERTY(
    
    QJSValue
     PropertyDimclrt
        // auto generated read function for public static properties:
         READ  getPropertyDimclrt
  )

  Q_PROPERTY(
    
    QJSValue
     PropertyDimBlockName
        // auto generated read function for public static properties:
         READ  getPropertyDimBlockName
  )

  Q_PROPERTY(
    
    QJSValue
     PropertyAutoTextPos
        // auto generated read function for public static properties:
         READ  getPropertyAutoTextPos
  )

  Q_PROPERTY(
    
    QJSValue
     PropertyFontName
        // auto generated read function for public static properties:
         READ  getPropertyFontName
  )

  Q_PROPERTY(
    
    QJSValue
     PropertyArrow1Flipped
        // auto generated read function for public static properties:
         READ  getPropertyArrow1Flipped
  )

  Q_PROPERTY(
    
    QJSValue
     PropertyArrow2Flipped
        // auto generated read function for public static properties:
         READ  getPropertyArrow2Flipped
  )

  Q_PROPERTY(
    
    QJSValue
     PropertyExtLineFix
        // auto generated read function for public static properties:
         READ  getPropertyExtLineFix
  )

  Q_PROPERTY(
    
    QJSValue
     PropertyExtLineFixLength
        // auto generated read function for public static properties:
         READ  getPropertyExtLineFixLength
  )

  Q_PROPERTY(
    
    QJSValue
     PropertyCenterPointX
        // auto generated read function for public static properties:
         READ  getPropertyCenterPointX
  )

  Q_PROPERTY(
    
    QJSValue
     PropertyCenterPointY
        // auto generated read function for public static properties:
         READ  getPropertyCenterPointY
  )

  Q_PROPERTY(
    
    QJSValue
     PropertyCenterPointZ
        // auto generated read function for public static properties:
         READ  getPropertyCenterPointZ
  )

  Q_PROPERTY(
    
    QJSValue
     PropertyChordPointX
        // auto generated read function for public static properties:
         READ  getPropertyChordPointX
  )

  Q_PROPERTY(
    
    QJSValue
     PropertyChordPointY
        // auto generated read function for public static properties:
         READ  getPropertyChordPointY
  )

  Q_PROPERTY(
    
    QJSValue
     PropertyChordPointZ
        // auto generated read function for public static properties:
         READ  getPropertyChordPointZ
  )


      public:
      //Q_INVOKABLE 
      RDimRadialEntity_WrapperSingleton(RJSApi& h) 
        : QObject(), 
          handler(h)
          
          {}

      
  // auto generated read function for public static property INVALID_ID:
  Q_INVOKABLE QJSValue getINVALID_ID() {
    return RJSHelper_qcad::cpp2js_RObject_Id(handler, RDimRadialEntity::INVALID_ID);
  }

  // auto generated read function for public static property INVALID_HANDLE:
  Q_INVOKABLE QJSValue getINVALID_HANDLE() {
    return RJSHelper_qcad::cpp2js_RObject_Handle(handler, RDimRadialEntity::INVALID_HANDLE);
  }

  // auto generated read function for public static property PropertySelected:
  Q_INVOKABLE QJSValue getPropertySelected() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRadialEntity::PropertySelected);
  }

  // auto generated read function for public static property PropertyInvisible:
  Q_INVOKABLE QJSValue getPropertyInvisible() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRadialEntity::PropertyInvisible);
  }

  // auto generated read function for public static property PropertyParentId:
  Q_INVOKABLE QJSValue getPropertyParentId() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRadialEntity::PropertyParentId);
  }

  // auto generated read function for public static property PropertyMinX:
  Q_INVOKABLE QJSValue getPropertyMinX() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRadialEntity::PropertyMinX);
  }

  // auto generated read function for public static property PropertyMinY:
  Q_INVOKABLE QJSValue getPropertyMinY() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRadialEntity::PropertyMinY);
  }

  // auto generated read function for public static property PropertyMaxX:
  Q_INVOKABLE QJSValue getPropertyMaxX() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRadialEntity::PropertyMaxX);
  }

  // auto generated read function for public static property PropertyMaxY:
  Q_INVOKABLE QJSValue getPropertyMaxY() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRadialEntity::PropertyMaxY);
  }

  // auto generated read function for public static property PropertySizeX:
  Q_INVOKABLE QJSValue getPropertySizeX() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRadialEntity::PropertySizeX);
  }

  // auto generated read function for public static property PropertySizeY:
  Q_INVOKABLE QJSValue getPropertySizeY() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRadialEntity::PropertySizeY);
  }

  // auto generated read function for public static property PropertyDefinitionPointX:
  Q_INVOKABLE QJSValue getPropertyDefinitionPointX() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRadialEntity::PropertyDefinitionPointX);
  }

  // auto generated read function for public static property PropertyDefinitionPointY:
  Q_INVOKABLE QJSValue getPropertyDefinitionPointY() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRadialEntity::PropertyDefinitionPointY);
  }

  // auto generated read function for public static property PropertyDefinitionPointZ:
  Q_INVOKABLE QJSValue getPropertyDefinitionPointZ() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRadialEntity::PropertyDefinitionPointZ);
  }

  // auto generated read function for public static property PropertyAutoLabel:
  Q_INVOKABLE QJSValue getPropertyAutoLabel() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRadialEntity::PropertyAutoLabel);
  }

  // auto generated read function for public static property PropertyDimaunit:
  Q_INVOKABLE QJSValue getPropertyDimaunit() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRadialEntity::PropertyDimaunit);
  }

  // auto generated read function for public static property PropertyDimadec:
  Q_INVOKABLE QJSValue getPropertyDimadec() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRadialEntity::PropertyDimadec);
  }

  // auto generated read function for public static property PropertyDimazin:
  Q_INVOKABLE QJSValue getPropertyDimazin() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRadialEntity::PropertyDimazin);
  }

  // auto generated read function for public static property PropertyCustom:
  Q_INVOKABLE QJSValue getPropertyCustom() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRadialEntity::PropertyCustom);
  }

  // auto generated read function for public static property PropertyHandle:
  Q_INVOKABLE QJSValue getPropertyHandle() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRadialEntity::PropertyHandle);
  }

  // auto generated read function for public static property PropertyProtected:
  Q_INVOKABLE QJSValue getPropertyProtected() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRadialEntity::PropertyProtected);
  }

  // auto generated read function for public static property PropertyWorkingSet:
  Q_INVOKABLE QJSValue getPropertyWorkingSet() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRadialEntity::PropertyWorkingSet);
  }

  // auto generated read function for public static property PropertyType:
  Q_INVOKABLE QJSValue getPropertyType() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRadialEntity::PropertyType);
  }

  // auto generated read function for public static property PropertyBlock:
  Q_INVOKABLE QJSValue getPropertyBlock() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRadialEntity::PropertyBlock);
  }

  // auto generated read function for public static property PropertyLayer:
  Q_INVOKABLE QJSValue getPropertyLayer() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRadialEntity::PropertyLayer);
  }

  // auto generated read function for public static property PropertyLinetype:
  Q_INVOKABLE QJSValue getPropertyLinetype() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRadialEntity::PropertyLinetype);
  }

  // auto generated read function for public static property PropertyLinetypeScale:
  Q_INVOKABLE QJSValue getPropertyLinetypeScale() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRadialEntity::PropertyLinetypeScale);
  }

  // auto generated read function for public static property PropertyLineweight:
  Q_INVOKABLE QJSValue getPropertyLineweight() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRadialEntity::PropertyLineweight);
  }

  // auto generated read function for public static property PropertyColor:
  Q_INVOKABLE QJSValue getPropertyColor() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRadialEntity::PropertyColor);
  }

  // auto generated read function for public static property PropertyDisplayedColor:
  Q_INVOKABLE QJSValue getPropertyDisplayedColor() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRadialEntity::PropertyDisplayedColor);
  }

  // auto generated read function for public static property PropertyDrawOrder:
  Q_INVOKABLE QJSValue getPropertyDrawOrder() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRadialEntity::PropertyDrawOrder);
  }

  // auto generated read function for public static property PropertyMiddleOfTextX:
  Q_INVOKABLE QJSValue getPropertyMiddleOfTextX() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRadialEntity::PropertyMiddleOfTextX);
  }

  // auto generated read function for public static property PropertyMiddleOfTextY:
  Q_INVOKABLE QJSValue getPropertyMiddleOfTextY() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRadialEntity::PropertyMiddleOfTextY);
  }

  // auto generated read function for public static property PropertyMiddleOfTextZ:
  Q_INVOKABLE QJSValue getPropertyMiddleOfTextZ() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRadialEntity::PropertyMiddleOfTextZ);
  }

  // auto generated read function for public static property PropertyText:
  Q_INVOKABLE QJSValue getPropertyText() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRadialEntity::PropertyText);
  }

  // auto generated read function for public static property PropertyUpperTolerance:
  Q_INVOKABLE QJSValue getPropertyUpperTolerance() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRadialEntity::PropertyUpperTolerance);
  }

  // auto generated read function for public static property PropertyLowerTolerance:
  Q_INVOKABLE QJSValue getPropertyLowerTolerance() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRadialEntity::PropertyLowerTolerance);
  }

  // auto generated read function for public static property PropertyMeasuredValue:
  Q_INVOKABLE QJSValue getPropertyMeasuredValue() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRadialEntity::PropertyMeasuredValue);
  }

  // auto generated read function for public static property PropertyDimscale:
  Q_INVOKABLE QJSValue getPropertyDimscale() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRadialEntity::PropertyDimscale);
  }

  // auto generated read function for public static property PropertyDimlfac:
  Q_INVOKABLE QJSValue getPropertyDimlfac() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRadialEntity::PropertyDimlfac);
  }

  // auto generated read function for public static property PropertyDimtxt:
  Q_INVOKABLE QJSValue getPropertyDimtxt() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRadialEntity::PropertyDimtxt);
  }

  // auto generated read function for public static property PropertyDimgap:
  Q_INVOKABLE QJSValue getPropertyDimgap() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRadialEntity::PropertyDimgap);
  }

  // auto generated read function for public static property PropertyDimasz:
  Q_INVOKABLE QJSValue getPropertyDimasz() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRadialEntity::PropertyDimasz);
  }

  // auto generated read function for public static property PropertyDimexe:
  Q_INVOKABLE QJSValue getPropertyDimexe() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRadialEntity::PropertyDimexe);
  }

  // auto generated read function for public static property PropertyDimexo:
  Q_INVOKABLE QJSValue getPropertyDimexo() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRadialEntity::PropertyDimexo);
  }

  // auto generated read function for public static property PropertyDimtad:
  Q_INVOKABLE QJSValue getPropertyDimtad() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRadialEntity::PropertyDimtad);
  }

  // auto generated read function for public static property PropertyDimtih:
  Q_INVOKABLE QJSValue getPropertyDimtih() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRadialEntity::PropertyDimtih);
  }

  // auto generated read function for public static property PropertyDimtsz:
  Q_INVOKABLE QJSValue getPropertyDimtsz() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRadialEntity::PropertyDimtsz);
  }

  // auto generated read function for public static property PropertyDimlunit:
  Q_INVOKABLE QJSValue getPropertyDimlunit() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRadialEntity::PropertyDimlunit);
  }

  // auto generated read function for public static property PropertyDimdec:
  Q_INVOKABLE QJSValue getPropertyDimdec() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRadialEntity::PropertyDimdec);
  }

  // auto generated read function for public static property PropertyDimdsep:
  Q_INVOKABLE QJSValue getPropertyDimdsep() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRadialEntity::PropertyDimdsep);
  }

  // auto generated read function for public static property PropertyDimzin:
  Q_INVOKABLE QJSValue getPropertyDimzin() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRadialEntity::PropertyDimzin);
  }

  // auto generated read function for public static property PropertyArchTick:
  Q_INVOKABLE QJSValue getPropertyArchTick() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRadialEntity::PropertyArchTick);
  }

  // auto generated read function for public static property PropertyDimclrt:
  Q_INVOKABLE QJSValue getPropertyDimclrt() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRadialEntity::PropertyDimclrt);
  }

  // auto generated read function for public static property PropertyDimBlockName:
  Q_INVOKABLE QJSValue getPropertyDimBlockName() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRadialEntity::PropertyDimBlockName);
  }

  // auto generated read function for public static property PropertyAutoTextPos:
  Q_INVOKABLE QJSValue getPropertyAutoTextPos() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRadialEntity::PropertyAutoTextPos);
  }

  // auto generated read function for public static property PropertyFontName:
  Q_INVOKABLE QJSValue getPropertyFontName() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRadialEntity::PropertyFontName);
  }

  // auto generated read function for public static property PropertyArrow1Flipped:
  Q_INVOKABLE QJSValue getPropertyArrow1Flipped() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRadialEntity::PropertyArrow1Flipped);
  }

  // auto generated read function for public static property PropertyArrow2Flipped:
  Q_INVOKABLE QJSValue getPropertyArrow2Flipped() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRadialEntity::PropertyArrow2Flipped);
  }

  // auto generated read function for public static property PropertyExtLineFix:
  Q_INVOKABLE QJSValue getPropertyExtLineFix() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRadialEntity::PropertyExtLineFix);
  }

  // auto generated read function for public static property PropertyExtLineFixLength:
  Q_INVOKABLE QJSValue getPropertyExtLineFixLength() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRadialEntity::PropertyExtLineFixLength);
  }

  // auto generated read function for public static property PropertyCenterPointX:
  Q_INVOKABLE QJSValue getPropertyCenterPointX() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRadialEntity::PropertyCenterPointX);
  }

  // auto generated read function for public static property PropertyCenterPointY:
  Q_INVOKABLE QJSValue getPropertyCenterPointY() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRadialEntity::PropertyCenterPointY);
  }

  // auto generated read function for public static property PropertyCenterPointZ:
  Q_INVOKABLE QJSValue getPropertyCenterPointZ() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRadialEntity::PropertyCenterPointZ);
  }

  // auto generated read function for public static property PropertyChordPointX:
  Q_INVOKABLE QJSValue getPropertyChordPointX() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRadialEntity::PropertyChordPointX);
  }

  // auto generated read function for public static property PropertyChordPointY:
  Q_INVOKABLE QJSValue getPropertyChordPointY() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRadialEntity::PropertyChordPointY);
  }

  // auto generated read function for public static property PropertyChordPointZ:
  Q_INVOKABLE QJSValue getPropertyChordPointZ() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRadialEntity::PropertyChordPointZ);
  }


      // static functions:
      
    // Class: RDimRadialEntity
    // Function: setCustomPropertyAttributes
    // Source: RObject
    // Static: true
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setCustomPropertyAttributes
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimRadialEntity
    // Function: getCustomPropertyAttributes
    // Source: RObject
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getCustomPropertyAttributes
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimRadialEntity
    // Function: isComplex
    // Source: REntity
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isComplex
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimRadialEntity
    // Function: isDimension
    // Source: REntity
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isDimension
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimRadialEntity
    // Function: isTextBased
    // Source: REntity
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isTextBased
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimRadialEntity
    // Function: renderDimensionText
    // Source: RDimensionEntity
    // Static: true
    // Parameters: 5
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  renderDimensionText
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    , 
  const QJSValue& 
  a4
      = QJSValue()
    , 
  const QJSValue& 
  a5
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimRadialEntity
    // Function: getDimensionBlockNames
    // Source: RDimensionEntity
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getDimensionBlockNames
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimRadialEntity
    // Function: init
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  init
              (

                
              )
              
              ;
            
    // Class: RDimRadialEntity
    // Function: getRtti
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getRtti
              (

                
              )
              
              ;
            
    // Class: RDimRadialEntity
    // Function: getStaticPropertyTypeIds
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getStaticPropertyTypeIds
              (

                
              )
              
              ;
            

      private:
          RJSApi& handler;
          //static RDimRadialEntity_WrapperSingleton* _singleInstance;

          // constants:
          
      };
    
    // static functions implementation in singleton wrapper:
    
    // wrapper class for RDimRadialEntity
    class RDimRadialEntity_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      RDimRadialEntity_Wrapper(const RDimRadialEntity_Wrapper&);

    public:
      // initialization of RDimRadialEntity:
      static void init(RJSApi& handler);

      
        static RDimRadialEntity* castToBase(void* vp, /*RJSType ID*/ int t) {
          

          // hook for modules to cast to other base types:
          for (int i=0; i<basecasters_RDimRadialEntity.length(); i++) {
            RJSBasecaster_RDimRadialEntity* basecaster = basecasters_RDimRadialEntity[i];
            RDimRadialEntity* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // pointer to desired type:
          if (t==RJSType_RDimRadialEntity::getIdStatic()) {
            return (RDimRadialEntity*)vp;
          }

          qWarning() << "RDimRadialEntity_Wrapper::castToBase: type not found: " << getTypeName(t);

          return nullptr;
          
        }

        static RDimRadialEntity* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_RDimRadialEntity*: wrapper wraps NULL";
          }

          RDimRadialEntity* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "RDimRadialEntity*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          RDimRadialEntity_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            RDimRadialEntity_Wrapper(RJSApi& h, RDimRadialEntity* o, bool wrappedCreated);
          
        // special constructor to wrap existing object from shared pointer:
        
            //Q_INVOKABLE 
            RDimRadialEntity_Wrapper(RJSApi& h, QSharedPointer<RDimRadialEntity> o);
          

      // destructor:
      
          virtual ~RDimRadialEntity_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: RDimRadialEntity
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              RDimRadialEntity_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
                  ,
                  
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            

    // non-static functions:
    
    // Class: RDimRadialEntity
    // Function: mustAlwaysClone
    // Source: RObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  mustAlwaysClone
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimRadialEntity
    // Function: getDocument
    // Source: RObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getDocument
              (

                
              )
              
              ;
            
    // Class: RDimRadialEntity
    // Function: setFlag
    // Source: RObject
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFlag
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimRadialEntity
    // Function: getFlag
    // Source: RObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getFlag
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RDimRadialEntity
    // Function: getId
    // Source: RObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getId
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimRadialEntity
    // Function: getHandle
    // Source: RObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getHandle
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimRadialEntity
    // Function: isProtected
    // Source: RObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isProtected
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimRadialEntity
    // Function: setProtected
    // Source: RObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setProtected
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimRadialEntity
    // Function: isInvisible
    // Source: RObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isInvisible
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimRadialEntity
    // Function: setInvisible
    // Source: RObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setInvisible
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimRadialEntity
    // Function: isUndone
    // Source: RObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isUndone
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimRadialEntity
    // Function: isWorkingSet
    // Source: RObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isWorkingSet
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimRadialEntity
    // Function: setWorkingSet
    // Source: RObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setWorkingSet
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimRadialEntity
    // Function: getPropertyTypeIds
    // Source: RObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getPropertyTypeIds
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RDimRadialEntity
    // Function: getCustomPropertyTypeIds
    // Source: RObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getCustomPropertyTypeIds
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimRadialEntity
    // Function: hasPropertyType
    // Source: RObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  hasPropertyType
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimRadialEntity
    // Function: hasCustomProperties
    // Source: RObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  hasCustomProperties
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimRadialEntity
    // Function: hasCustomProperty
    // Source: RObject
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  hasCustomProperty
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RDimRadialEntity
    // Function: getCustomProperty
    // Source: RObject
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getCustomProperty
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RDimRadialEntity
    // Function: getCustomDoubleProperty
    // Source: RObject
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getCustomDoubleProperty
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RDimRadialEntity
    // Function: getCustomIntProperty
    // Source: RObject
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getCustomIntProperty
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RDimRadialEntity
    // Function: getCustomBoolProperty
    // Source: RObject
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getCustomBoolProperty
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RDimRadialEntity
    // Function: setCustomProperty
    // Source: RObject
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setCustomProperty
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimRadialEntity
    // Function: removeCustomProperty
    // Source: RObject
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  removeCustomProperty
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimRadialEntity
    // Function: getCustomPropertyTitles
    // Source: RObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getCustomPropertyTitles
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimRadialEntity
    // Function: getCustomPropertyKeys
    // Source: RObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getCustomPropertyKeys
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RDimRadialEntity
    // Function: copyCustomPropertiesFrom
    // Source: RObject
    // Static: false
    // Parameters: 6
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  copyCustomPropertiesFrom
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    , 
  const QJSValue& 
  a4
      = QJSValue()
    , 
  const QJSValue& 
  a5
      = QJSValue()
    , 
  const QJSValue& 
  a6
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimRadialEntity
    // Function: dump
    // Source: RObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  dump
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimRadialEntity
    // Function: validate
    // Source: RObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  validate
              (

                
              )
              
              ;
            
    // Class: RDimRadialEntity
    // Function: setDocument
    // Source: REntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setDocument
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimRadialEntity
    // Function: getType
    // Source: REntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getType
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimRadialEntity
    // Function: isPointType
    // Source: REntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isPointType
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimRadialEntity
    // Function: isValid
    // Source: REntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isValid
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimRadialEntity
    // Function: isSane
    // Source: REntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isSane
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimRadialEntity
    // Function: isSelected
    // Source: REntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isSelected
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimRadialEntity
    // Function: setSelected
    // Source: REntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setSelected
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimRadialEntity
    // Function: isSelectedWorkingSet
    // Source: REntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isSelectedWorkingSet
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimRadialEntity
    // Function: setSelectedWorkingSet
    // Source: REntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setSelectedWorkingSet
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimRadialEntity
    // Function: isSelectable
    // Source: REntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isSelectable
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimRadialEntity
    // Function: isUpdatesEnabled
    // Source: REntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isUpdatesEnabled
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimRadialEntity
    // Function: setUpdatesEnabled
    // Source: REntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setUpdatesEnabled
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimRadialEntity
    // Function: cloneOnChange
    // Source: REntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  cloneOnChange
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimRadialEntity
    // Function: setDrawOrder
    // Source: REntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setDrawOrder
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimRadialEntity
    // Function: getDrawOrder
    // Source: REntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getDrawOrder
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimRadialEntity
    // Function: setLayerId
    // Source: REntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setLayerId
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimRadialEntity
    // Function: setLayerName
    // Source: REntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setLayerName
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimRadialEntity
    // Function: getLayerId
    // Source: REntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getLayerId
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimRadialEntity
    // Function: getLayerName
    // Source: REntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getLayerName
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimRadialEntity
    // Function: setBlockId
    // Source: REntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setBlockId
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimRadialEntity
    // Function: getBlockId
    // Source: REntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getBlockId
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimRadialEntity
    // Function: getBlockName
    // Source: REntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getBlockName
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimRadialEntity
    // Function: getParentId
    // Source: REntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getParentId
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimRadialEntity
    // Function: setLinetypeId
    // Source: REntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setLinetypeId
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimRadialEntity
    // Function: setLinetypePattern
    // Source: REntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setLinetypePattern
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimRadialEntity
    // Function: getLinetypeId
    // Source: REntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getLinetypeId
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimRadialEntity
    // Function: getLinetypePattern
    // Source: REntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getLinetypePattern
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimRadialEntity
    // Function: setLinetypeScale
    // Source: REntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setLinetypeScale
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimRadialEntity
    // Function: getLinetypeScale
    // Source: REntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getLinetypeScale
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimRadialEntity
    // Function: setLineweight
    // Source: REntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setLineweight
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimRadialEntity
    // Function: getLineweight
    // Source: REntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getLineweight
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimRadialEntity
    // Function: setColor
    // Source: REntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setColor
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimRadialEntity
    // Function: getColor
    // Source: REntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getColor
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimRadialEntity
    // Function: getDisplayColor
    // Source: REntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getDisplayColor
              (

                
              )
              
              ;
            
    // Class: RDimRadialEntity
    // Function: copyAttributesFrom
    // Source: REntity
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  copyAttributesFrom
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimRadialEntity
    // Function: getBoundingBox
    // Source: REntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getBoundingBox
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RDimRadialEntity
    // Function: to2D
    // Source: REntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  to2D
              (

                
              )
              
              ;
            
    // Class: RDimRadialEntity
    // Function: setZ
    // Source: REntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setZ
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimRadialEntity
    // Function: getBoundingBoxes
    // Source: REntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getBoundingBoxes
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RDimRadialEntity
    // Function: getHull
    // Source: REntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getHull
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RDimRadialEntity
    // Function: getShapes
    // Source: REntity
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getShapes
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RDimRadialEntity
    // Function: getClosestSubEntityId
    // Source: REntity
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getClosestSubEntityId
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RDimRadialEntity
    // Function: getClosestShape
    // Source: REntity
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getClosestShape
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RDimRadialEntity
    // Function: getClosestSimpleShape
    // Source: REntity
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getClosestSimpleShape
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RDimRadialEntity
    // Function: isInside
    // Source: REntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isInside
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RDimRadialEntity
    // Function: isOnEntity
    // Source: REntity
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isOnEntity
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RDimRadialEntity
    // Function: intersectsWith
    // Source: REntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  intersectsWith
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RDimRadialEntity
    // Function: getDistanceTo
    // Source: REntity
    // Static: false
    // Parameters: 5
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getDistanceTo
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    , 
  const QJSValue& 
  a4
      = QJSValue()
    , 
  const QJSValue& 
  a5
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RDimRadialEntity
    // Function: getVectorTo
    // Source: REntity
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getVectorTo
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RDimRadialEntity
    // Function: getInternalReferencePoints
    // Source: REntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getInternalReferencePoints
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RDimRadialEntity
    // Function: getReferencePoints
    // Source: REntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getReferencePoints
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RDimRadialEntity
    // Function: getPointOnEntity
    // Source: REntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getPointOnEntity
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimRadialEntity
    // Function: getEndPoints
    // Source: REntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getEndPoints
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RDimRadialEntity
    // Function: getMiddlePoints
    // Source: REntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getMiddlePoints
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RDimRadialEntity
    // Function: getCenterPoints
    // Source: REntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getCenterPoints
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RDimRadialEntity
    // Function: getClosestPointOnEntity
    // Source: REntity
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getClosestPointOnEntity
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RDimRadialEntity
    // Function: getPointsWithDistanceToEnd
    // Source: REntity
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getPointsWithDistanceToEnd
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RDimRadialEntity
    // Function: getIntersectionPoints
    // Source: REntity
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getIntersectionPoints
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    , 
  const QJSValue& 
  a4
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RDimRadialEntity
    // Function: getIntersectionPointsWithShape
    // Source: REntity
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getIntersectionPointsWithShape
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RDimRadialEntity
    // Function: clickReferencePoint
    // Source: REntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  clickReferencePoint
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimRadialEntity
    // Function: moveReferencePoint
    // Source: REntity
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  moveReferencePoint
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimRadialEntity
    // Function: move
    // Source: REntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  move
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimRadialEntity
    // Function: rotate
    // Source: REntity
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  rotate
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimRadialEntity
    // Function: scale
    // Source: REntity
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  scale
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimRadialEntity
    // Function: scaleNonUniform
    // Source: REntity
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  scaleNonUniform
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimRadialEntity
    // Function: scaleVisualProperties
    // Source: REntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  scaleVisualProperties
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimRadialEntity
    // Function: setViewportContext
    // Source: REntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setViewportContext
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimRadialEntity
    // Function: mirror
    // Source: REntity
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  mirror
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimRadialEntity
    // Function: flipHorizontal
    // Source: REntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  flipHorizontal
              (

                
              )
              
              ;
            
    // Class: RDimRadialEntity
    // Function: flipVertical
    // Source: REntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  flipVertical
              (

                
              )
              
              ;
            
    // Class: RDimRadialEntity
    // Function: stretch
    // Source: REntity
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  stretch
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimRadialEntity
    // Function: update
    // Source: REntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  update
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimRadialEntity
    // Function: castToShape
    // Source: REntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  castToShape
              (

                
              )
              
              ;
            
    // Class: RDimRadialEntity
    // Function: setAutoUpdatesBlocked
    // Source: REntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setAutoUpdatesBlocked
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimRadialEntity
    // Function: isVisible
    // Source: REntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isVisible
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RDimRadialEntity
    // Function: isEditable
    // Source: REntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isEditable
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RDimRadialEntity
    // Function: isInWorkingSet
    // Source: REntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isInWorkingSet
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimRadialEntity
    // Function: getComplexity
    // Source: REntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getComplexity
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimRadialEntity
    // Function: exportEntity
    // Source: RDimensionEntity
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  exportEntity
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RDimRadialEntity
    // Function: clearStyleOverrides
    // Source: RDimensionEntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  clearStyleOverrides
              (

                
              )
              
              ;
            
    // Class: RDimRadialEntity
    // Function: setDefinitionPoint
    // Source: RDimensionEntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setDefinitionPoint
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimRadialEntity
    // Function: getDefinitionPoint
    // Source: RDimensionEntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getDefinitionPoint
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimRadialEntity
    // Function: setText
    // Source: RDimensionEntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setText
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimRadialEntity
    // Function: getText
    // Source: RDimensionEntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getText
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimRadialEntity
    // Function: getMeasurement
    // Source: RDimensionEntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getMeasurement
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RDimRadialEntity
    // Function: getTextData
    // Source: RDimensionEntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getTextData
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimRadialEntity
    // Function: updateBoundingBox
    // Source: RDimensionEntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  updateBoundingBox
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RDimRadialEntity
    // Function: updateTextPositionCenter
    // Source: RDimensionEntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  updateTextPositionCenter
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RDimRadialEntity
    // Function: updateTextData
    // Source: RDimensionEntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  updateTextData
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RDimRadialEntity
    // Function: updateShapes
    // Source: RDimensionEntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  updateShapes
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RDimRadialEntity
    // Function: setTextPosition
    // Source: RDimensionEntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setTextPosition
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimRadialEntity
    // Function: getTextPosition
    // Source: RDimensionEntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getTextPosition
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimRadialEntity
    // Function: setFontName
    // Source: RDimensionEntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFontName
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimRadialEntity
    // Function: getFontName
    // Source: RDimensionEntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getFontName
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimRadialEntity
    // Function: hasCustomTextPosition
    // Source: RDimensionEntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  hasCustomTextPosition
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimRadialEntity
    // Function: setCustomTextPosition
    // Source: RDimensionEntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setCustomTextPosition
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimRadialEntity
    // Function: getLineSpacingStyle
    // Source: RDimensionEntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getLineSpacingStyle
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimRadialEntity
    // Function: getLineSpacingFactor
    // Source: RDimensionEntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getLineSpacingFactor
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimRadialEntity
    // Function: getTextAngle
    // Source: RDimensionEntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getTextAngle
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimRadialEntity
    // Function: getLinearFactor
    // Source: RDimensionEntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getLinearFactor
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimRadialEntity
    // Function: setLinearFactor
    // Source: RDimensionEntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setLinearFactor
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimRadialEntity
    // Function: getDimscale
    // Source: RDimensionEntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getDimscale
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimRadialEntity
    // Function: setDimscale
    // Source: RDimensionEntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setDimscale
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimRadialEntity
    // Function: getDimBlockName
    // Source: RDimensionEntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getDimBlockName
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimRadialEntity
    // Function: hasDimensionBlockReference
    // Source: RDimensionEntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  hasDimensionBlockReference
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimRadialEntity
    // Function: isArrow1Flipped
    // Source: RDimensionEntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isArrow1Flipped
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimRadialEntity
    // Function: setArrow1Flipped
    // Source: RDimensionEntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setArrow1Flipped
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimRadialEntity
    // Function: isArrow2Flipped
    // Source: RDimensionEntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isArrow2Flipped
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimRadialEntity
    // Function: setArrow2Flipped
    // Source: RDimensionEntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setArrow2Flipped
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimRadialEntity
    // Function: isExtLineFix
    // Source: RDimensionEntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isExtLineFix
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimRadialEntity
    // Function: setExtLineFix
    // Source: RDimensionEntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setExtLineFix
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimRadialEntity
    // Function: getExtLineFixLength
    // Source: RDimensionEntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getExtLineFixLength
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimRadialEntity
    // Function: setExtLineFixLength
    // Source: RDimensionEntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setExtLineFixLength
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimRadialEntity
    // Function: hasOverride
    // Source: RDimensionEntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  hasOverride
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RDimRadialEntity
    // Function: clone
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  clone
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimRadialEntity
    // Function: setProperty
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setProperty
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimRadialEntity
    // Function: getProperty
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getProperty
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    , 
  const QJSValue& 
  a4
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimRadialEntity
    // Function: getData
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getData
              (

                
              )
              
              ;
            
    // Class: RDimRadialEntity
    // Function: setData
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setData
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimRadialEntity
    // Function: setChordPoint
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setChordPoint
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimRadialEntity
    // Function: getChordPoint
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getChordPoint
              (

                
              )
              
                const
              
              ;
            
          // destroy function for non-copyable objects:
          Q_INVOKABLE void destr() {
            if (wrapped!=nullptr) {
              
                  delete wrapped;
                
              wrapped = nullptr;
            }
            
              if (!spWrapped.isNull()) {
                spWrapped = nullptr;
              }
            
          }
        

        //public:
        // set engine:
        //Q_INVOKABLE void setHandler(RJSApi* h) {
        //  RJSWrapperObj::setHandler(h);
        //}
      

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
        public:

        // get type of wrapped object:
        Q_INVOKABLE
        virtual /*RJSType ID*/ int getWrappedType() const {
          return RJSType_RDimRadialEntity::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return true;
            
        }

        // get wrapped object:
        RDimRadialEntity* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
            else if (!spWrapped.isNull()) {
              return spWrapped.data();
            }
          
          return nullptr;
        }

        // get wrapped object (const):
        RDimRadialEntity* getWrapped() const {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
            else if (!spWrapped.isNull()) {
              return spWrapped.data();
            }
          
          return nullptr;
        }

        // get wrapped object as void*:
        virtual void* getWrappedVoid() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
            else if (!spWrapped.isNull()) {
              return spWrapped.data();
            }
          
          return nullptr;
        }

        
        // get wrapped object as QSharedPointer:
        virtual QSharedPointer<RDimRadialEntity> getWrappedSp() {
          if (!spWrapped.isNull()) {
            return spWrapped;
          }
          if (wrapped!=nullptr) {
            qWarning() << "wrapper does not wrap a QSharedPointer<RDimRadialEntity> but a regular pointer";
            return QSharedPointer<RDimRadialEntity>();
          }
          return QSharedPointer<RDimRadialEntity>();
        }

        bool hasWrappedSp() const {
          return !spWrapped.isNull() && spWrapped.data()!=nullptr;
        }
        

        bool hasWrapped() const {
          return wrapped!=nullptr 
          
            || (!spWrapped.isNull() && spWrapped.data()!=nullptr)
          
          ;
        }

        Q_INVOKABLE
        bool isNullWrapper() const {
          return !hasWrapped();
        }

        Q_INVOKABLE
        unsigned long long int getAddress() const {
          if (wrapped!=nullptr) {
            return (unsigned long long int)wrapped;
          }
          
            if (!spWrapped.isNull() && spWrapped.data()!=nullptr) {
              return (unsigned long long int)spWrapped.data();
            }
          
          return (unsigned long long int)0;
        }

        

        //public slots:
          //void slotDestroyed(QObject* obj) {
          //  qDebug() << "destroying QObject:" << (long int)obj;
          //}

        

        private:
        // wrapped object:
        RDimRadialEntity* wrapped;

        
          // wrapped object as shared pointer:
          QSharedPointer<RDimRadialEntity> spWrapped;
        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_RDimRadialEntity*> basecasters_RDimRadialEntity;

      public:
        static void registerBasecaster_RDimRadialEntity(RJSBasecaster_RDimRadialEntity* bc) {
          basecasters_RDimRadialEntity.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(RDimRadialEntity_Wrapper*)

    Q_DECLARE_INTERFACE(RDimRadialEntity_Wrapper, "org.qcad.RDimRadialEntity_Wrapper")

  
  #endif
  
