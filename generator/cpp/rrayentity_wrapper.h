
  // Auto generated
  
    #ifndef RRAYENTITY_H_WRAPPER
    #define RRAYENTITY_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "RJSHelper.h"
        #include "../RJSHelper_qcad.h"
      

    #include "RJSWrapperObj.h"
  
        #include "RDocument.h"
      
        #include "RExporter.h"
      
    #include <QQmlEngine>
    
        #include "RJSType_qcad.h"
      
        #include "RRayEntity.h"
      
      // singleton class wrapper for static functions:
      class QCADJSAPI_EXPORT 
     RRayEntity_WrapperSingleton: public QObject {
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
     PropertyBasePointX
        // auto generated read function for public static properties:
         READ  getPropertyBasePointX
  )

  Q_PROPERTY(
    
    QJSValue
     PropertyBasePointY
        // auto generated read function for public static properties:
         READ  getPropertyBasePointY
  )

  Q_PROPERTY(
    
    QJSValue
     PropertyBasePointZ
        // auto generated read function for public static properties:
         READ  getPropertyBasePointZ
  )

  Q_PROPERTY(
    
    QJSValue
     PropertySecondPointX
        // auto generated read function for public static properties:
         READ  getPropertySecondPointX
  )

  Q_PROPERTY(
    
    QJSValue
     PropertySecondPointY
        // auto generated read function for public static properties:
         READ  getPropertySecondPointY
  )

  Q_PROPERTY(
    
    QJSValue
     PropertySecondPointZ
        // auto generated read function for public static properties:
         READ  getPropertySecondPointZ
  )

  Q_PROPERTY(
    
    QJSValue
     PropertyDirectionX
        // auto generated read function for public static properties:
         READ  getPropertyDirectionX
  )

  Q_PROPERTY(
    
    QJSValue
     PropertyDirectionY
        // auto generated read function for public static properties:
         READ  getPropertyDirectionY
  )

  Q_PROPERTY(
    
    QJSValue
     PropertyDirectionZ
        // auto generated read function for public static properties:
         READ  getPropertyDirectionZ
  )

  Q_PROPERTY(
    
    QJSValue
     PropertyAngle
        // auto generated read function for public static properties:
         READ  getPropertyAngle
  )

  Q_PROPERTY(
    
    QJSValue
     PropertyFixedAngle
        // auto generated read function for public static properties:
         READ  getPropertyFixedAngle
  )


      public:
      //Q_INVOKABLE 
      RRayEntity_WrapperSingleton(RJSApi& h) 
        : QObject(), 
          handler(h)
          
          {}

      
  // auto generated read function for public static property INVALID_ID:
  Q_INVOKABLE QJSValue getINVALID_ID() {
    return RJSHelper_qcad::cpp2js_RObject_Id(handler, RRayEntity::INVALID_ID);
  }

  // auto generated read function for public static property INVALID_HANDLE:
  Q_INVOKABLE QJSValue getINVALID_HANDLE() {
    return RJSHelper_qcad::cpp2js_RObject_Handle(handler, RRayEntity::INVALID_HANDLE);
  }

  // auto generated read function for public static property PropertySelected:
  Q_INVOKABLE QJSValue getPropertySelected() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RRayEntity::PropertySelected);
  }

  // auto generated read function for public static property PropertyInvisible:
  Q_INVOKABLE QJSValue getPropertyInvisible() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RRayEntity::PropertyInvisible);
  }

  // auto generated read function for public static property PropertyParentId:
  Q_INVOKABLE QJSValue getPropertyParentId() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RRayEntity::PropertyParentId);
  }

  // auto generated read function for public static property PropertyMinX:
  Q_INVOKABLE QJSValue getPropertyMinX() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RRayEntity::PropertyMinX);
  }

  // auto generated read function for public static property PropertyMinY:
  Q_INVOKABLE QJSValue getPropertyMinY() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RRayEntity::PropertyMinY);
  }

  // auto generated read function for public static property PropertyMaxX:
  Q_INVOKABLE QJSValue getPropertyMaxX() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RRayEntity::PropertyMaxX);
  }

  // auto generated read function for public static property PropertyMaxY:
  Q_INVOKABLE QJSValue getPropertyMaxY() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RRayEntity::PropertyMaxY);
  }

  // auto generated read function for public static property PropertySizeX:
  Q_INVOKABLE QJSValue getPropertySizeX() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RRayEntity::PropertySizeX);
  }

  // auto generated read function for public static property PropertySizeY:
  Q_INVOKABLE QJSValue getPropertySizeY() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RRayEntity::PropertySizeY);
  }

  // auto generated read function for public static property PropertyCustom:
  Q_INVOKABLE QJSValue getPropertyCustom() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RRayEntity::PropertyCustom);
  }

  // auto generated read function for public static property PropertyHandle:
  Q_INVOKABLE QJSValue getPropertyHandle() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RRayEntity::PropertyHandle);
  }

  // auto generated read function for public static property PropertyProtected:
  Q_INVOKABLE QJSValue getPropertyProtected() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RRayEntity::PropertyProtected);
  }

  // auto generated read function for public static property PropertyWorkingSet:
  Q_INVOKABLE QJSValue getPropertyWorkingSet() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RRayEntity::PropertyWorkingSet);
  }

  // auto generated read function for public static property PropertyType:
  Q_INVOKABLE QJSValue getPropertyType() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RRayEntity::PropertyType);
  }

  // auto generated read function for public static property PropertyBlock:
  Q_INVOKABLE QJSValue getPropertyBlock() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RRayEntity::PropertyBlock);
  }

  // auto generated read function for public static property PropertyLayer:
  Q_INVOKABLE QJSValue getPropertyLayer() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RRayEntity::PropertyLayer);
  }

  // auto generated read function for public static property PropertyLinetype:
  Q_INVOKABLE QJSValue getPropertyLinetype() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RRayEntity::PropertyLinetype);
  }

  // auto generated read function for public static property PropertyLinetypeScale:
  Q_INVOKABLE QJSValue getPropertyLinetypeScale() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RRayEntity::PropertyLinetypeScale);
  }

  // auto generated read function for public static property PropertyLineweight:
  Q_INVOKABLE QJSValue getPropertyLineweight() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RRayEntity::PropertyLineweight);
  }

  // auto generated read function for public static property PropertyColor:
  Q_INVOKABLE QJSValue getPropertyColor() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RRayEntity::PropertyColor);
  }

  // auto generated read function for public static property PropertyDisplayedColor:
  Q_INVOKABLE QJSValue getPropertyDisplayedColor() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RRayEntity::PropertyDisplayedColor);
  }

  // auto generated read function for public static property PropertyDrawOrder:
  Q_INVOKABLE QJSValue getPropertyDrawOrder() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RRayEntity::PropertyDrawOrder);
  }

  // auto generated read function for public static property PropertyBasePointX:
  Q_INVOKABLE QJSValue getPropertyBasePointX() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RRayEntity::PropertyBasePointX);
  }

  // auto generated read function for public static property PropertyBasePointY:
  Q_INVOKABLE QJSValue getPropertyBasePointY() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RRayEntity::PropertyBasePointY);
  }

  // auto generated read function for public static property PropertyBasePointZ:
  Q_INVOKABLE QJSValue getPropertyBasePointZ() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RRayEntity::PropertyBasePointZ);
  }

  // auto generated read function for public static property PropertySecondPointX:
  Q_INVOKABLE QJSValue getPropertySecondPointX() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RRayEntity::PropertySecondPointX);
  }

  // auto generated read function for public static property PropertySecondPointY:
  Q_INVOKABLE QJSValue getPropertySecondPointY() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RRayEntity::PropertySecondPointY);
  }

  // auto generated read function for public static property PropertySecondPointZ:
  Q_INVOKABLE QJSValue getPropertySecondPointZ() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RRayEntity::PropertySecondPointZ);
  }

  // auto generated read function for public static property PropertyDirectionX:
  Q_INVOKABLE QJSValue getPropertyDirectionX() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RRayEntity::PropertyDirectionX);
  }

  // auto generated read function for public static property PropertyDirectionY:
  Q_INVOKABLE QJSValue getPropertyDirectionY() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RRayEntity::PropertyDirectionY);
  }

  // auto generated read function for public static property PropertyDirectionZ:
  Q_INVOKABLE QJSValue getPropertyDirectionZ() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RRayEntity::PropertyDirectionZ);
  }

  // auto generated read function for public static property PropertyAngle:
  Q_INVOKABLE QJSValue getPropertyAngle() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RRayEntity::PropertyAngle);
  }

  // auto generated read function for public static property PropertyFixedAngle:
  Q_INVOKABLE QJSValue getPropertyFixedAngle() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RRayEntity::PropertyFixedAngle);
  }


      // static functions:
      
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
          //static RRayEntity_WrapperSingleton* _singleInstance;

          // constants:
          
      };
    
    // static functions implementation in singleton wrapper:
    
    // wrapper class for RRayEntity
    class QCADJSAPI_EXPORT 
     RRayEntity_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      RRayEntity_Wrapper(const RRayEntity_Wrapper&);

    public:
      // initialization of RRayEntity:
      static void init(RJSApi& handler);

      
        static RRayEntity* castToBase(void* vp, /*RJSType ID*/ int t) {
          

          // hook for modules to cast from other types to base RRayEntity:
          for (int i=0; i<basecasters_RRayEntity.length(); i++) {
            RJSBasecaster_RRayEntity* basecaster = basecasters_RRayEntity[i];
            RRayEntity* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class RRayEntity:
          if (t==RJSType_RRayEntity::getIdStatic()) {
            return (RRayEntity*)vp;
          }

          qWarning() << "RRayEntity_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static RRayEntity* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_RRayEntity*: wrapper wraps NULL";
          }

          RRayEntity* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "RRayEntity*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          RRayEntity_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            RRayEntity_Wrapper(RJSApi& h, RRayEntity* o, bool wrappedCreated);
          
        // special constructor to wrap existing object from shared pointer:
        
            //Q_INVOKABLE 
            RRayEntity_Wrapper(RJSApi& h, QSharedPointer<RRayEntity> o);
          

      // destructor:
      
          virtual ~RRayEntity_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: RRayEntity
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              RRayEntity_Wrapper
                
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
    
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
    // Function: exportEntity
    // Source: 
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
            
    // Class: RRayEntity
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
            
    // Class: RRayEntity
    // Function: setShape
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setShape
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RRayEntity
    // Function: setBasePoint
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setBasePoint
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RRayEntity
    // Function: getBasePoint
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getBasePoint
              (

                
              )
              
                const
              
              ;
            
    // Class: RRayEntity
    // Function: setSecondPoint
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setSecondPoint
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RRayEntity
    // Function: getSecondPoint
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getSecondPoint
              (

                
              )
              
                const
              
              ;
            
    // Class: RRayEntity
    // Function: setDirectionVectorPoint
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setDirectionVectorPoint
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RRayEntity
    // Function: getDirectionVector
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getDirectionVector
              (

                
              )
              
                const
              
              ;
            
    // Class: RRayEntity
    // Function: getAngle
    // Source: 
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
            
    // Class: RRayEntity
    // Function: hasFixedAngle
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  hasFixedAngle
              (

                
              )
              
                const
              
              ;
            
    // Class: RRayEntity
    // Function: setFixedAngle
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFixedAngle
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RRayEntity
    // Function: getDirection1
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getDirection1
              (

                
              )
              
                const
              
              ;
            
    // Class: RRayEntity
    // Function: getDirection2
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getDirection2
              (

                
              )
              
                const
              
              ;
            
    // Class: RRayEntity
    // Function: reverse
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  reverse
              (

                
              )
              
              ;
            
    // Class: RRayEntity
    // Function: getSideOfPoint
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getSideOfPoint
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RRayEntity
    // Function: getTrimEnd
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getTrimEnd
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
            
    // Class: RRayEntity
    // Function: trimStartPoint
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  trimStartPoint
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
            
    // Class: RRayEntity
    // Function: trimEndPoint
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  trimEndPoint
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
            
    // Class: RRayEntity
    // Function: getLength
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getLength
              (

                
              )
              
                const
              
              ;
            
          // destroy function for non-copyable objects:
          Q_INVOKABLE void destr() {
            
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
          return RJSType_RRayEntity::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return true;
            
        }

        // get wrapped object:
        RRayEntity* getWrapped() {
          
            if (!spWrapped.isNull()) {
              return spWrapped.data();
            }
          
          return nullptr;
        }

        // get wrapped object (const):
        RRayEntity* getWrapped() const {
          
            if (!spWrapped.isNull()) {
              return spWrapped.data();
            }
          
          return nullptr;
        }

        // get wrapped object as void*:
        virtual void* getWrappedVoid() {
          
            if (!spWrapped.isNull()) {
              return spWrapped.data();
            }
          
          return nullptr;
        }

        
        // get wrapped object as QSharedPointer:
        virtual QSharedPointer<RRayEntity> getWrappedSp() {
          if (!spWrapped.isNull()) {
            return spWrapped;
          }
          //if (wrapped!=nullptr) {
          //  qWarning() << "wrapper does not wrap a QSharedPointer<RRayEntity> but a regular pointer";
          //  return QSharedPointer<RRayEntity>();
          //}
          return QSharedPointer<RRayEntity>();
        }

        bool hasWrappedSp() const {
          return !spWrapped.isNull() && spWrapped.data()!=nullptr;
        }
        

        bool hasWrapped() const {
          
            return (!spWrapped.isNull() && spWrapped.data()!=nullptr);
          
          ;
        }

        Q_INVOKABLE
        bool isNullWrapper() const {
          return !hasWrapped();
        }

        Q_INVOKABLE
        unsigned long long int getAddress() const {
          
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

        
          // wrapped object as shared pointer:
          QSharedPointer<RRayEntity> spWrapped;
        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_RRayEntity*> basecasters_RRayEntity;

      public:
        static void registerBasecaster_RRayEntity(RJSBasecaster_RRayEntity* bc) {
          basecasters_RRayEntity.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(RRayEntity_Wrapper*)

    Q_DECLARE_INTERFACE(RRayEntity_Wrapper, "org.qcad.RRayEntity_Wrapper")

  
  #endif
  
