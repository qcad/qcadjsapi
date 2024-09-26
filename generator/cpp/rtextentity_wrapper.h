
  // Auto generated
  
    #ifndef RTEXTENTITY_H_WRAPPER
    #define RTEXTENTITY_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "RJSHelper.h"
        #include "../RJSHelper_qcad.h"
      

    #include "RJSWrapperObj.h"
  
        #include "RDocument.h"
      
        #include "RExporter.h"
      
    #include <QQmlEngine>
    
        #include "RJSType_qcad.h"
      
        #include "RTextEntity.h"
      
      // singleton class wrapper for static functions:
      class QCADJSAPI_EXPORT 
     RTextEntity_WrapperSingleton: public QObject {
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
     PropertySimple
        // auto generated read function for public static properties:
         READ  getPropertySimple
  )

  Q_PROPERTY(
    
    QJSValue
     PropertyPositionX
        // auto generated read function for public static properties:
         READ  getPropertyPositionX
  )

  Q_PROPERTY(
    
    QJSValue
     PropertyPositionY
        // auto generated read function for public static properties:
         READ  getPropertyPositionY
  )

  Q_PROPERTY(
    
    QJSValue
     PropertyPositionZ
        // auto generated read function for public static properties:
         READ  getPropertyPositionZ
  )

  Q_PROPERTY(
    
    QJSValue
     PropertyText
        // auto generated read function for public static properties:
         READ  getPropertyText
  )

  Q_PROPERTY(
    
    QJSValue
     PropertyPlainText
        // auto generated read function for public static properties:
         READ  getPropertyPlainText
  )

  Q_PROPERTY(
    
    QJSValue
     PropertyFontName
        // auto generated read function for public static properties:
         READ  getPropertyFontName
  )

  Q_PROPERTY(
    
    QJSValue
     PropertyHeight
        // auto generated read function for public static properties:
         READ  getPropertyHeight
  )

  Q_PROPERTY(
    
    QJSValue
     PropertyWidth
        // auto generated read function for public static properties:
         READ  getPropertyWidth
  )

  Q_PROPERTY(
    
    QJSValue
     PropertyAngle
        // auto generated read function for public static properties:
         READ  getPropertyAngle
  )

  Q_PROPERTY(
    
    QJSValue
     PropertyXScale
        // auto generated read function for public static properties:
         READ  getPropertyXScale
  )

  Q_PROPERTY(
    
    QJSValue
     PropertyBold
        // auto generated read function for public static properties:
         READ  getPropertyBold
  )

  Q_PROPERTY(
    
    QJSValue
     PropertyItalic
        // auto generated read function for public static properties:
         READ  getPropertyItalic
  )

  Q_PROPERTY(
    
    QJSValue
     PropertyLineSpacingFactor
        // auto generated read function for public static properties:
         READ  getPropertyLineSpacingFactor
  )

  Q_PROPERTY(
    
    QJSValue
     PropertyHAlign
        // auto generated read function for public static properties:
         READ  getPropertyHAlign
  )

  Q_PROPERTY(
    
    QJSValue
     PropertyVAlign
        // auto generated read function for public static properties:
         READ  getPropertyVAlign
  )

  Q_PROPERTY(
    
    QJSValue
     PropertyBackward
        // auto generated read function for public static properties:
         READ  getPropertyBackward
  )

  Q_PROPERTY(
    
    QJSValue
     PropertyUpsideDown
        // auto generated read function for public static properties:
         READ  getPropertyUpsideDown
  )


      public:
      //Q_INVOKABLE 
      RTextEntity_WrapperSingleton(RJSApi& h) 
        : QObject(), 
          handler(h)
          
          {}

      
  // auto generated read function for public static property INVALID_ID:
  Q_INVOKABLE QJSValue getINVALID_ID() {
    return RJSHelper_qcad::cpp2js_RObject_Id(handler, RTextEntity::INVALID_ID);
  }

  // auto generated read function for public static property INVALID_HANDLE:
  Q_INVOKABLE QJSValue getINVALID_HANDLE() {
    return RJSHelper_qcad::cpp2js_RObject_Handle(handler, RTextEntity::INVALID_HANDLE);
  }

  // auto generated read function for public static property PropertySelected:
  Q_INVOKABLE QJSValue getPropertySelected() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RTextEntity::PropertySelected);
  }

  // auto generated read function for public static property PropertyInvisible:
  Q_INVOKABLE QJSValue getPropertyInvisible() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RTextEntity::PropertyInvisible);
  }

  // auto generated read function for public static property PropertyParentId:
  Q_INVOKABLE QJSValue getPropertyParentId() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RTextEntity::PropertyParentId);
  }

  // auto generated read function for public static property PropertyMinX:
  Q_INVOKABLE QJSValue getPropertyMinX() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RTextEntity::PropertyMinX);
  }

  // auto generated read function for public static property PropertyMinY:
  Q_INVOKABLE QJSValue getPropertyMinY() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RTextEntity::PropertyMinY);
  }

  // auto generated read function for public static property PropertyMaxX:
  Q_INVOKABLE QJSValue getPropertyMaxX() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RTextEntity::PropertyMaxX);
  }

  // auto generated read function for public static property PropertyMaxY:
  Q_INVOKABLE QJSValue getPropertyMaxY() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RTextEntity::PropertyMaxY);
  }

  // auto generated read function for public static property PropertySizeX:
  Q_INVOKABLE QJSValue getPropertySizeX() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RTextEntity::PropertySizeX);
  }

  // auto generated read function for public static property PropertySizeY:
  Q_INVOKABLE QJSValue getPropertySizeY() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RTextEntity::PropertySizeY);
  }

  // auto generated read function for public static property PropertyCustom:
  Q_INVOKABLE QJSValue getPropertyCustom() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RTextEntity::PropertyCustom);
  }

  // auto generated read function for public static property PropertyHandle:
  Q_INVOKABLE QJSValue getPropertyHandle() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RTextEntity::PropertyHandle);
  }

  // auto generated read function for public static property PropertyProtected:
  Q_INVOKABLE QJSValue getPropertyProtected() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RTextEntity::PropertyProtected);
  }

  // auto generated read function for public static property PropertyWorkingSet:
  Q_INVOKABLE QJSValue getPropertyWorkingSet() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RTextEntity::PropertyWorkingSet);
  }

  // auto generated read function for public static property PropertyType:
  Q_INVOKABLE QJSValue getPropertyType() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RTextEntity::PropertyType);
  }

  // auto generated read function for public static property PropertyBlock:
  Q_INVOKABLE QJSValue getPropertyBlock() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RTextEntity::PropertyBlock);
  }

  // auto generated read function for public static property PropertyLayer:
  Q_INVOKABLE QJSValue getPropertyLayer() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RTextEntity::PropertyLayer);
  }

  // auto generated read function for public static property PropertyLinetype:
  Q_INVOKABLE QJSValue getPropertyLinetype() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RTextEntity::PropertyLinetype);
  }

  // auto generated read function for public static property PropertyLinetypeScale:
  Q_INVOKABLE QJSValue getPropertyLinetypeScale() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RTextEntity::PropertyLinetypeScale);
  }

  // auto generated read function for public static property PropertyLineweight:
  Q_INVOKABLE QJSValue getPropertyLineweight() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RTextEntity::PropertyLineweight);
  }

  // auto generated read function for public static property PropertyColor:
  Q_INVOKABLE QJSValue getPropertyColor() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RTextEntity::PropertyColor);
  }

  // auto generated read function for public static property PropertyDisplayedColor:
  Q_INVOKABLE QJSValue getPropertyDisplayedColor() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RTextEntity::PropertyDisplayedColor);
  }

  // auto generated read function for public static property PropertyDrawOrder:
  Q_INVOKABLE QJSValue getPropertyDrawOrder() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RTextEntity::PropertyDrawOrder);
  }

  // auto generated read function for public static property PropertySimple:
  Q_INVOKABLE QJSValue getPropertySimple() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RTextEntity::PropertySimple);
  }

  // auto generated read function for public static property PropertyPositionX:
  Q_INVOKABLE QJSValue getPropertyPositionX() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RTextEntity::PropertyPositionX);
  }

  // auto generated read function for public static property PropertyPositionY:
  Q_INVOKABLE QJSValue getPropertyPositionY() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RTextEntity::PropertyPositionY);
  }

  // auto generated read function for public static property PropertyPositionZ:
  Q_INVOKABLE QJSValue getPropertyPositionZ() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RTextEntity::PropertyPositionZ);
  }

  // auto generated read function for public static property PropertyText:
  Q_INVOKABLE QJSValue getPropertyText() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RTextEntity::PropertyText);
  }

  // auto generated read function for public static property PropertyPlainText:
  Q_INVOKABLE QJSValue getPropertyPlainText() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RTextEntity::PropertyPlainText);
  }

  // auto generated read function for public static property PropertyFontName:
  Q_INVOKABLE QJSValue getPropertyFontName() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RTextEntity::PropertyFontName);
  }

  // auto generated read function for public static property PropertyHeight:
  Q_INVOKABLE QJSValue getPropertyHeight() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RTextEntity::PropertyHeight);
  }

  // auto generated read function for public static property PropertyWidth:
  Q_INVOKABLE QJSValue getPropertyWidth() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RTextEntity::PropertyWidth);
  }

  // auto generated read function for public static property PropertyAngle:
  Q_INVOKABLE QJSValue getPropertyAngle() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RTextEntity::PropertyAngle);
  }

  // auto generated read function for public static property PropertyXScale:
  Q_INVOKABLE QJSValue getPropertyXScale() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RTextEntity::PropertyXScale);
  }

  // auto generated read function for public static property PropertyBold:
  Q_INVOKABLE QJSValue getPropertyBold() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RTextEntity::PropertyBold);
  }

  // auto generated read function for public static property PropertyItalic:
  Q_INVOKABLE QJSValue getPropertyItalic() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RTextEntity::PropertyItalic);
  }

  // auto generated read function for public static property PropertyLineSpacingFactor:
  Q_INVOKABLE QJSValue getPropertyLineSpacingFactor() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RTextEntity::PropertyLineSpacingFactor);
  }

  // auto generated read function for public static property PropertyHAlign:
  Q_INVOKABLE QJSValue getPropertyHAlign() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RTextEntity::PropertyHAlign);
  }

  // auto generated read function for public static property PropertyVAlign:
  Q_INVOKABLE QJSValue getPropertyVAlign() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RTextEntity::PropertyVAlign);
  }

  // auto generated read function for public static property PropertyBackward:
  Q_INVOKABLE QJSValue getPropertyBackward() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RTextEntity::PropertyBackward);
  }

  // auto generated read function for public static property PropertyUpsideDown:
  Q_INVOKABLE QJSValue getPropertyUpsideDown() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RTextEntity::PropertyUpsideDown);
  }


      // static functions:
      
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
          //static RTextEntity_WrapperSingleton* _singleInstance;

          // constants:
          
      };
    
    // static functions implementation in singleton wrapper:
    
    // wrapper class for RTextEntity
    class QCADJSAPI_EXPORT 
     RTextEntity_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      RTextEntity_Wrapper(const RTextEntity_Wrapper&);

    public:
      // initialization of RTextEntity:
      static void init(RJSApi& handler);

      
        static RTextEntity* castToBase(void* vp, /*RJSType ID*/ int t) {
          

          // hook for modules to cast from other types to base RTextEntity:
          for (int i=0; i<basecasters_RTextEntity.length(); i++) {
            RJSBasecaster_RTextEntity* basecaster = basecasters_RTextEntity[i];
            RTextEntity* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class RTextEntity:
          if (t==RJSType_RTextEntity::getIdStatic()) {
            return (RTextEntity*)vp;
          }

          qWarning() << "RTextEntity_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static RTextEntity* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_RTextEntity*: wrapper wraps NULL";
          }

          RTextEntity* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "RTextEntity*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          RTextEntity_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            RTextEntity_Wrapper(RJSApi& h, RTextEntity* o, bool wrappedCreated);
          
        // special constructor to wrap existing object from shared pointer:
        
            //Q_INVOKABLE 
            RTextEntity_Wrapper(RJSApi& h, QSharedPointer<RTextEntity> o);
          

      // destructor:
      
          virtual ~RTextEntity_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: RTextEntity
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              RTextEntity_Wrapper
                
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
    
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
    // Function: getRotatedBoundingBox
    // Source: RTextBasedEntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getRotatedBoundingBox
              (

                
              )
              
                const
              
              ;
            
    // Class: RTextEntity
    // Function: setProperty
    // Source: RTextBasedEntity
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
            
    // Class: RTextEntity
    // Function: getProperty
    // Source: RTextBasedEntity
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
            
    // Class: RTextEntity
    // Function: exportEntity
    // Source: RTextBasedEntity
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
            
    // Class: RTextEntity
    // Function: scaleNonUniform
    // Source: RTextBasedEntity
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
            
    // Class: RTextEntity
    // Function: getPainterPaths
    // Source: RTextBasedEntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getPainterPaths
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RTextEntity
    // Function: getShapes
    // Source: RTextBasedEntity
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
            
    // Class: RTextEntity
    // Function: getExploded
    // Source: RTextBasedEntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getExploded
              (

                
              )
              
                const
              
              ;
            
    // Class: RTextEntity
    // Function: getTextData
    // Source: RTextBasedEntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getTextData
              (

                
              )
              
              ;
            
    // Class: RTextEntity
    // Function: isBold
    // Source: RTextBasedEntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isBold
              (

                
              )
              
                const
              
              ;
            
    // Class: RTextEntity
    // Function: setBold
    // Source: RTextBasedEntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setBold
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RTextEntity
    // Function: isItalic
    // Source: RTextBasedEntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isItalic
              (

                
              )
              
                const
              
              ;
            
    // Class: RTextEntity
    // Function: setItalic
    // Source: RTextBasedEntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setItalic
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RTextEntity
    // Function: isBackward
    // Source: RTextBasedEntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isBackward
              (

                
              )
              
                const
              
              ;
            
    // Class: RTextEntity
    // Function: setBackward
    // Source: RTextBasedEntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setBackward
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RTextEntity
    // Function: isUpsideDown
    // Source: RTextBasedEntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isUpsideDown
              (

                
              )
              
                const
              
              ;
            
    // Class: RTextEntity
    // Function: setUpsideDown
    // Source: RTextBasedEntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setUpsideDown
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RTextEntity
    // Function: getPosition
    // Source: RTextBasedEntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getPosition
              (

                
              )
              
                const
              
              ;
            
    // Class: RTextEntity
    // Function: setPosition
    // Source: RTextBasedEntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setPosition
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RTextEntity
    // Function: getAlignmentPoint
    // Source: RTextBasedEntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getAlignmentPoint
              (

                
              )
              
                const
              
              ;
            
    // Class: RTextEntity
    // Function: setAlignmentPoint
    // Source: RTextBasedEntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setAlignmentPoint
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RTextEntity
    // Function: getTextHeight
    // Source: RTextBasedEntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getTextHeight
              (

                
              )
              
                const
              
              ;
            
    // Class: RTextEntity
    // Function: setTextHeight
    // Source: RTextBasedEntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setTextHeight
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RTextEntity
    // Function: getTextWidth
    // Source: RTextBasedEntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getTextWidth
              (

                
              )
              
                const
              
              ;
            
    // Class: RTextEntity
    // Function: getWidth
    // Source: RTextBasedEntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getWidth
              (

                
              )
              
                const
              
              ;
            
    // Class: RTextEntity
    // Function: getHeight
    // Source: RTextBasedEntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getHeight
              (

                
              )
              
                const
              
              ;
            
    // Class: RTextEntity
    // Function: getVAlign
    // Source: RTextBasedEntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getVAlign
              (

                
              )
              
                const
              
              ;
            
    // Class: RTextEntity
    // Function: setVAlign
    // Source: RTextBasedEntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setVAlign
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RTextEntity
    // Function: getHAlign
    // Source: RTextBasedEntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getHAlign
              (

                
              )
              
                const
              
              ;
            
    // Class: RTextEntity
    // Function: setHAlign
    // Source: RTextBasedEntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setHAlign
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RTextEntity
    // Function: getFontName
    // Source: RTextBasedEntity
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
            
    // Class: RTextEntity
    // Function: setFontName
    // Source: RTextBasedEntity
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
            
    // Class: RTextEntity
    // Function: getFontFile
    // Source: RTextBasedEntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getFontFile
              (

                
              )
              
                const
              
              ;
            
    // Class: RTextEntity
    // Function: setDrawingDirection
    // Source: RTextBasedEntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setDrawingDirection
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RTextEntity
    // Function: getDrawingDirection
    // Source: RTextBasedEntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getDrawingDirection
              (

                
              )
              
                const
              
              ;
            
    // Class: RTextEntity
    // Function: setLineSpacingStyle
    // Source: RTextBasedEntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setLineSpacingStyle
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RTextEntity
    // Function: getLineSpacingStyle
    // Source: RTextBasedEntity
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
            
    // Class: RTextEntity
    // Function: setLineSpacingFactor
    // Source: RTextBasedEntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setLineSpacingFactor
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RTextEntity
    // Function: getLineSpacingFactor
    // Source: RTextBasedEntity
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
            
    // Class: RTextEntity
    // Function: setAngle
    // Source: RTextBasedEntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setAngle
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RTextEntity
    // Function: getAngle
    // Source: RTextBasedEntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getAngle
              (

                
              )
              
                const
              
              ;
            
    // Class: RTextEntity
    // Function: setXScale
    // Source: RTextBasedEntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setXScale
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RTextEntity
    // Function: getXScale
    // Source: RTextBasedEntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getXScale
              (

                
              )
              
                const
              
              ;
            
    // Class: RTextEntity
    // Function: setSimple
    // Source: RTextBasedEntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setSimple
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RTextEntity
    // Function: isSimple
    // Source: RTextBasedEntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isSimple
              (

                
              )
              
                const
              
              ;
            
    // Class: RTextEntity
    // Function: getEscapedText
    // Source: RTextBasedEntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getEscapedText
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RTextEntity
    // Function: getPlainText
    // Source: RTextBasedEntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getPlainText
              (

                
              )
              
                const
              
              ;
            
    // Class: RTextEntity
    // Function: setText
    // Source: RTextBasedEntity
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
            
    // Class: RTextEntity
    // Function: sync
    // Source: RTextBasedEntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  sync
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RTextEntity
    // Function: getSimpleTextBlocks
    // Source: RTextBasedEntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getSimpleTextBlocks
              (

                
              )
              
              ;
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
            
    // Class: RTextEntity
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
          return RJSType_RTextEntity::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return true;
            
        }

        // get wrapped object:
        RTextEntity* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
            else if (!spWrapped.isNull()) {
              return spWrapped.data();
            }
          
          return nullptr;
        }

        // get wrapped object (const):
        RTextEntity* getWrapped() const {
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
        virtual QSharedPointer<RTextEntity> getWrappedSp() {
          if (!spWrapped.isNull()) {
            return spWrapped;
          }
          if (wrapped!=nullptr) {
            qWarning() << "wrapper does not wrap a QSharedPointer<RTextEntity> but a regular pointer";
            return QSharedPointer<RTextEntity>();
          }
          return QSharedPointer<RTextEntity>();
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
        RTextEntity* wrapped;

        
          // wrapped object as shared pointer:
          QSharedPointer<RTextEntity> spWrapped;
        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_RTextEntity*> basecasters_RTextEntity;

      public:
        static void registerBasecaster_RTextEntity(RJSBasecaster_RTextEntity* bc) {
          basecasters_RTextEntity.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(RTextEntity_Wrapper*)

    Q_DECLARE_INTERFACE(RTextEntity_Wrapper, "org.qcad.RTextEntity_Wrapper")

  
  #endif
  
