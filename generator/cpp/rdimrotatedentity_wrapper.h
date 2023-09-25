
  // Auto generated
  
    #ifndef RDIMROTATEDENTITY_H_WRAPPER
    #define RDIMROTATEDENTITY_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "RJSHelper.h"
        #include "../RJSHelper_qcad.h"
      

    #include "RJSWrapperObj.h"
  
        #include "RDocument.h"
      
        #include "RExporter.h"
      
    #include <QQmlEngine>
    
        #include "RJSType_qcad.h"
      
        #include "RDimRotatedEntity.h"
      
      // singleton class wrapper for static functions:
      class RDimRotatedEntity_WrapperSingleton: public QObject {
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
     PropertyDimensionLinePosX
        // auto generated read function for public static properties:
         READ  getPropertyDimensionLinePosX
  )

  Q_PROPERTY(
    
    QJSValue
     PropertyDimensionLinePosY
        // auto generated read function for public static properties:
         READ  getPropertyDimensionLinePosY
  )

  Q_PROPERTY(
    
    QJSValue
     PropertyDimensionLinePosZ
        // auto generated read function for public static properties:
         READ  getPropertyDimensionLinePosZ
  )

  Q_PROPERTY(
    
    QJSValue
     PropertyExtensionPoint1X
        // auto generated read function for public static properties:
         READ  getPropertyExtensionPoint1X
  )

  Q_PROPERTY(
    
    QJSValue
     PropertyExtensionPoint1Y
        // auto generated read function for public static properties:
         READ  getPropertyExtensionPoint1Y
  )

  Q_PROPERTY(
    
    QJSValue
     PropertyExtensionPoint1Z
        // auto generated read function for public static properties:
         READ  getPropertyExtensionPoint1Z
  )

  Q_PROPERTY(
    
    QJSValue
     PropertyExtensionPoint2X
        // auto generated read function for public static properties:
         READ  getPropertyExtensionPoint2X
  )

  Q_PROPERTY(
    
    QJSValue
     PropertyExtensionPoint2Y
        // auto generated read function for public static properties:
         READ  getPropertyExtensionPoint2Y
  )

  Q_PROPERTY(
    
    QJSValue
     PropertyExtensionPoint2Z
        // auto generated read function for public static properties:
         READ  getPropertyExtensionPoint2Z
  )

  Q_PROPERTY(
    
    QJSValue
     PropertyAngle
        // auto generated read function for public static properties:
         READ  getPropertyAngle
  )


      public:
      //Q_INVOKABLE 
      RDimRotatedEntity_WrapperSingleton(RJSApi& h) 
        : QObject(), 
          handler(h)
          
          {
      }

      
  // auto generated read function for public static property INVALID_ID:
  Q_INVOKABLE QJSValue getINVALID_ID() {
    return RJSHelper_qcad::cpp2js_RObject_Id(handler, RDimRotatedEntity::INVALID_ID);
  }

  // auto generated read function for public static property INVALID_HANDLE:
  Q_INVOKABLE QJSValue getINVALID_HANDLE() {
    return RJSHelper_qcad::cpp2js_RObject_Handle(handler, RDimRotatedEntity::INVALID_HANDLE);
  }

  // auto generated read function for public static property PropertySelected:
  Q_INVOKABLE QJSValue getPropertySelected() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRotatedEntity::PropertySelected);
  }

  // auto generated read function for public static property PropertyInvisible:
  Q_INVOKABLE QJSValue getPropertyInvisible() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRotatedEntity::PropertyInvisible);
  }

  // auto generated read function for public static property PropertyParentId:
  Q_INVOKABLE QJSValue getPropertyParentId() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRotatedEntity::PropertyParentId);
  }

  // auto generated read function for public static property PropertyMinX:
  Q_INVOKABLE QJSValue getPropertyMinX() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRotatedEntity::PropertyMinX);
  }

  // auto generated read function for public static property PropertyMinY:
  Q_INVOKABLE QJSValue getPropertyMinY() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRotatedEntity::PropertyMinY);
  }

  // auto generated read function for public static property PropertyMaxX:
  Q_INVOKABLE QJSValue getPropertyMaxX() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRotatedEntity::PropertyMaxX);
  }

  // auto generated read function for public static property PropertyMaxY:
  Q_INVOKABLE QJSValue getPropertyMaxY() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRotatedEntity::PropertyMaxY);
  }

  // auto generated read function for public static property PropertySizeX:
  Q_INVOKABLE QJSValue getPropertySizeX() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRotatedEntity::PropertySizeX);
  }

  // auto generated read function for public static property PropertySizeY:
  Q_INVOKABLE QJSValue getPropertySizeY() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRotatedEntity::PropertySizeY);
  }

  // auto generated read function for public static property PropertyDefinitionPointX:
  Q_INVOKABLE QJSValue getPropertyDefinitionPointX() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRotatedEntity::PropertyDefinitionPointX);
  }

  // auto generated read function for public static property PropertyDefinitionPointY:
  Q_INVOKABLE QJSValue getPropertyDefinitionPointY() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRotatedEntity::PropertyDefinitionPointY);
  }

  // auto generated read function for public static property PropertyDefinitionPointZ:
  Q_INVOKABLE QJSValue getPropertyDefinitionPointZ() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRotatedEntity::PropertyDefinitionPointZ);
  }

  // auto generated read function for public static property PropertyAutoLabel:
  Q_INVOKABLE QJSValue getPropertyAutoLabel() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRotatedEntity::PropertyAutoLabel);
  }

  // auto generated read function for public static property PropertyDimaunit:
  Q_INVOKABLE QJSValue getPropertyDimaunit() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRotatedEntity::PropertyDimaunit);
  }

  // auto generated read function for public static property PropertyDimadec:
  Q_INVOKABLE QJSValue getPropertyDimadec() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRotatedEntity::PropertyDimadec);
  }

  // auto generated read function for public static property PropertyDimazin:
  Q_INVOKABLE QJSValue getPropertyDimazin() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRotatedEntity::PropertyDimazin);
  }

  // auto generated read function for public static property PropertyCustom:
  Q_INVOKABLE QJSValue getPropertyCustom() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRotatedEntity::PropertyCustom);
  }

  // auto generated read function for public static property PropertyHandle:
  Q_INVOKABLE QJSValue getPropertyHandle() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRotatedEntity::PropertyHandle);
  }

  // auto generated read function for public static property PropertyProtected:
  Q_INVOKABLE QJSValue getPropertyProtected() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRotatedEntity::PropertyProtected);
  }

  // auto generated read function for public static property PropertyWorkingSet:
  Q_INVOKABLE QJSValue getPropertyWorkingSet() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRotatedEntity::PropertyWorkingSet);
  }

  // auto generated read function for public static property PropertyType:
  Q_INVOKABLE QJSValue getPropertyType() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRotatedEntity::PropertyType);
  }

  // auto generated read function for public static property PropertyBlock:
  Q_INVOKABLE QJSValue getPropertyBlock() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRotatedEntity::PropertyBlock);
  }

  // auto generated read function for public static property PropertyLayer:
  Q_INVOKABLE QJSValue getPropertyLayer() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRotatedEntity::PropertyLayer);
  }

  // auto generated read function for public static property PropertyLinetype:
  Q_INVOKABLE QJSValue getPropertyLinetype() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRotatedEntity::PropertyLinetype);
  }

  // auto generated read function for public static property PropertyLinetypeScale:
  Q_INVOKABLE QJSValue getPropertyLinetypeScale() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRotatedEntity::PropertyLinetypeScale);
  }

  // auto generated read function for public static property PropertyLineweight:
  Q_INVOKABLE QJSValue getPropertyLineweight() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRotatedEntity::PropertyLineweight);
  }

  // auto generated read function for public static property PropertyColor:
  Q_INVOKABLE QJSValue getPropertyColor() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRotatedEntity::PropertyColor);
  }

  // auto generated read function for public static property PropertyDisplayedColor:
  Q_INVOKABLE QJSValue getPropertyDisplayedColor() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRotatedEntity::PropertyDisplayedColor);
  }

  // auto generated read function for public static property PropertyDrawOrder:
  Q_INVOKABLE QJSValue getPropertyDrawOrder() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRotatedEntity::PropertyDrawOrder);
  }

  // auto generated read function for public static property PropertyMiddleOfTextX:
  Q_INVOKABLE QJSValue getPropertyMiddleOfTextX() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRotatedEntity::PropertyMiddleOfTextX);
  }

  // auto generated read function for public static property PropertyMiddleOfTextY:
  Q_INVOKABLE QJSValue getPropertyMiddleOfTextY() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRotatedEntity::PropertyMiddleOfTextY);
  }

  // auto generated read function for public static property PropertyMiddleOfTextZ:
  Q_INVOKABLE QJSValue getPropertyMiddleOfTextZ() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRotatedEntity::PropertyMiddleOfTextZ);
  }

  // auto generated read function for public static property PropertyText:
  Q_INVOKABLE QJSValue getPropertyText() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRotatedEntity::PropertyText);
  }

  // auto generated read function for public static property PropertyUpperTolerance:
  Q_INVOKABLE QJSValue getPropertyUpperTolerance() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRotatedEntity::PropertyUpperTolerance);
  }

  // auto generated read function for public static property PropertyLowerTolerance:
  Q_INVOKABLE QJSValue getPropertyLowerTolerance() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRotatedEntity::PropertyLowerTolerance);
  }

  // auto generated read function for public static property PropertyMeasuredValue:
  Q_INVOKABLE QJSValue getPropertyMeasuredValue() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRotatedEntity::PropertyMeasuredValue);
  }

  // auto generated read function for public static property PropertyDimscale:
  Q_INVOKABLE QJSValue getPropertyDimscale() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRotatedEntity::PropertyDimscale);
  }

  // auto generated read function for public static property PropertyDimlfac:
  Q_INVOKABLE QJSValue getPropertyDimlfac() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRotatedEntity::PropertyDimlfac);
  }

  // auto generated read function for public static property PropertyDimtxt:
  Q_INVOKABLE QJSValue getPropertyDimtxt() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRotatedEntity::PropertyDimtxt);
  }

  // auto generated read function for public static property PropertyDimgap:
  Q_INVOKABLE QJSValue getPropertyDimgap() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRotatedEntity::PropertyDimgap);
  }

  // auto generated read function for public static property PropertyDimasz:
  Q_INVOKABLE QJSValue getPropertyDimasz() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRotatedEntity::PropertyDimasz);
  }

  // auto generated read function for public static property PropertyDimexe:
  Q_INVOKABLE QJSValue getPropertyDimexe() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRotatedEntity::PropertyDimexe);
  }

  // auto generated read function for public static property PropertyDimexo:
  Q_INVOKABLE QJSValue getPropertyDimexo() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRotatedEntity::PropertyDimexo);
  }

  // auto generated read function for public static property PropertyDimtad:
  Q_INVOKABLE QJSValue getPropertyDimtad() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRotatedEntity::PropertyDimtad);
  }

  // auto generated read function for public static property PropertyDimtih:
  Q_INVOKABLE QJSValue getPropertyDimtih() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRotatedEntity::PropertyDimtih);
  }

  // auto generated read function for public static property PropertyDimtsz:
  Q_INVOKABLE QJSValue getPropertyDimtsz() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRotatedEntity::PropertyDimtsz);
  }

  // auto generated read function for public static property PropertyDimlunit:
  Q_INVOKABLE QJSValue getPropertyDimlunit() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRotatedEntity::PropertyDimlunit);
  }

  // auto generated read function for public static property PropertyDimdec:
  Q_INVOKABLE QJSValue getPropertyDimdec() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRotatedEntity::PropertyDimdec);
  }

  // auto generated read function for public static property PropertyDimdsep:
  Q_INVOKABLE QJSValue getPropertyDimdsep() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRotatedEntity::PropertyDimdsep);
  }

  // auto generated read function for public static property PropertyDimzin:
  Q_INVOKABLE QJSValue getPropertyDimzin() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRotatedEntity::PropertyDimzin);
  }

  // auto generated read function for public static property PropertyArchTick:
  Q_INVOKABLE QJSValue getPropertyArchTick() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRotatedEntity::PropertyArchTick);
  }

  // auto generated read function for public static property PropertyDimclrt:
  Q_INVOKABLE QJSValue getPropertyDimclrt() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRotatedEntity::PropertyDimclrt);
  }

  // auto generated read function for public static property PropertyDimBlockName:
  Q_INVOKABLE QJSValue getPropertyDimBlockName() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRotatedEntity::PropertyDimBlockName);
  }

  // auto generated read function for public static property PropertyAutoTextPos:
  Q_INVOKABLE QJSValue getPropertyAutoTextPos() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRotatedEntity::PropertyAutoTextPos);
  }

  // auto generated read function for public static property PropertyFontName:
  Q_INVOKABLE QJSValue getPropertyFontName() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRotatedEntity::PropertyFontName);
  }

  // auto generated read function for public static property PropertyArrow1Flipped:
  Q_INVOKABLE QJSValue getPropertyArrow1Flipped() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRotatedEntity::PropertyArrow1Flipped);
  }

  // auto generated read function for public static property PropertyArrow2Flipped:
  Q_INVOKABLE QJSValue getPropertyArrow2Flipped() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRotatedEntity::PropertyArrow2Flipped);
  }

  // auto generated read function for public static property PropertyExtLineFix:
  Q_INVOKABLE QJSValue getPropertyExtLineFix() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRotatedEntity::PropertyExtLineFix);
  }

  // auto generated read function for public static property PropertyExtLineFixLength:
  Q_INVOKABLE QJSValue getPropertyExtLineFixLength() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRotatedEntity::PropertyExtLineFixLength);
  }

  // auto generated read function for public static property PropertyDimensionLinePosX:
  Q_INVOKABLE QJSValue getPropertyDimensionLinePosX() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRotatedEntity::PropertyDimensionLinePosX);
  }

  // auto generated read function for public static property PropertyDimensionLinePosY:
  Q_INVOKABLE QJSValue getPropertyDimensionLinePosY() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRotatedEntity::PropertyDimensionLinePosY);
  }

  // auto generated read function for public static property PropertyDimensionLinePosZ:
  Q_INVOKABLE QJSValue getPropertyDimensionLinePosZ() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRotatedEntity::PropertyDimensionLinePosZ);
  }

  // auto generated read function for public static property PropertyExtensionPoint1X:
  Q_INVOKABLE QJSValue getPropertyExtensionPoint1X() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRotatedEntity::PropertyExtensionPoint1X);
  }

  // auto generated read function for public static property PropertyExtensionPoint1Y:
  Q_INVOKABLE QJSValue getPropertyExtensionPoint1Y() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRotatedEntity::PropertyExtensionPoint1Y);
  }

  // auto generated read function for public static property PropertyExtensionPoint1Z:
  Q_INVOKABLE QJSValue getPropertyExtensionPoint1Z() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRotatedEntity::PropertyExtensionPoint1Z);
  }

  // auto generated read function for public static property PropertyExtensionPoint2X:
  Q_INVOKABLE QJSValue getPropertyExtensionPoint2X() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRotatedEntity::PropertyExtensionPoint2X);
  }

  // auto generated read function for public static property PropertyExtensionPoint2Y:
  Q_INVOKABLE QJSValue getPropertyExtensionPoint2Y() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRotatedEntity::PropertyExtensionPoint2Y);
  }

  // auto generated read function for public static property PropertyExtensionPoint2Z:
  Q_INVOKABLE QJSValue getPropertyExtensionPoint2Z() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRotatedEntity::PropertyExtensionPoint2Z);
  }

  // auto generated read function for public static property PropertyAngle:
  Q_INVOKABLE QJSValue getPropertyAngle() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RDimRotatedEntity::PropertyAngle);
  }


      // static functions:
      
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
          //static RDimRotatedEntity_WrapperSingleton* _singleInstance;

          // constants:
          
      };

    
    // static functions implementation in singleton wrapper:
    
    // wrapper class for RDimRotatedEntity
    class RDimRotatedEntity_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      RDimRotatedEntity_Wrapper(const RDimRotatedEntity_Wrapper&);

    public:
      // initialization of RDimRotatedEntity:
      static void init(RJSApi& handler);

      
        static RDimRotatedEntity* castToBase(void* vp, /*RJSType ID*/ int t) {
          
          // check if pointer points to derrived type:
          

          // pointer to desired type:
          if (t==RJSType_RDimRotatedEntity::getIdStatic()) {
            return (RDimRotatedEntity*)vp;
          }

          return nullptr;
          
        }

        static RDimRotatedEntity* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_RDimRotatedEntity*: wrapper wraps NULL";
          }

          RDimRotatedEntity* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "RDimRotatedEntity*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          RDimRotatedEntity_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            RDimRotatedEntity_Wrapper(RJSApi& h, RDimRotatedEntity* o, bool wrappedCreated);
          
        // special constructor to wrap existing object from shared pointer:
        
            //Q_INVOKABLE 
            RDimRotatedEntity_Wrapper(RJSApi& h, QSharedPointer<RDimRotatedEntity> o);
          

      // destructor:
      
          virtual ~RDimRotatedEntity_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: RDimRotatedEntity
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              RDimRotatedEntity_Wrapper
                
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
    
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
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
            
    // Class: RDimRotatedEntity
    // Function: setExtensionPoint1
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setExtensionPoint1
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimRotatedEntity
    // Function: getExtensionPoint1
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getExtensionPoint1
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimRotatedEntity
    // Function: setExtensionPoint2
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setExtensionPoint2
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimRotatedEntity
    // Function: getExtensionPoint2
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getExtensionPoint2
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimRotatedEntity
    // Function: setRotation
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setRotation
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimRotatedEntity
    // Function: getRotation
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getRotation
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
          return RJSType_RDimRotatedEntity::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return true;
            
        }

        // get wrapped object:
        RDimRotatedEntity* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
            else if (!spWrapped.isNull()) {
              return spWrapped.data();
            }
          
          return nullptr;
        }

        // get wrapped object (const):
        RDimRotatedEntity* getWrapped() const {
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
        virtual QSharedPointer<RDimRotatedEntity> getWrappedSp() {
          if (!spWrapped.isNull()) {
            return spWrapped;
          }
          if (wrapped!=nullptr) {
            qWarning() << "wrapper does not wrap a QSharedPointer<RDimRotatedEntity> but a regular pointer";
            return QSharedPointer<RDimRotatedEntity>();
          }
          return QSharedPointer<RDimRotatedEntity>();
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
        RDimRotatedEntity* wrapped;

        
          // wrapped object as shared pointer:
          QSharedPointer<RDimRotatedEntity> spWrapped;
        

        bool wrappedCreated;
      
    };

    Q_DECLARE_METATYPE(RDimRotatedEntity_Wrapper*)

    Q_DECLARE_INTERFACE(RDimRotatedEntity_Wrapper, "org.qcad.RDimRotatedEntity_Wrapper")

  
  #endif
  