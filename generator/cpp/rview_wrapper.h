
  // Auto generated
  
    #ifndef RVIEW_H_WRAPPER
    #define RVIEW_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "RJSHelper.h"
        #include "../RJSHelper_qcad.h"
      

    #include "RJSWrapperObj.h"
  
        #include "RDocument.h"
      
    #include <QQmlEngine>
    
        #include "RJSType_qcad.h"
      
        #include "RView.h"
      
      // singleton class wrapper for static functions:
      class RView_WrapperSingleton: public QObject {
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
     PropertyCustom
        // auto generated read function for public static properties:
         READ  getPropertyCustom
  )

  Q_PROPERTY(
    
    QJSValue
     PropertyType
        // auto generated read function for public static properties:
         READ  getPropertyType
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


      public:
      //Q_INVOKABLE 
      RView_WrapperSingleton(RJSApi& h) 
        : QObject(), 
          handler(h)
          
          {}

      
  // auto generated read function for public static property INVALID_ID:
  Q_INVOKABLE QJSValue getINVALID_ID() {
    return RJSHelper_qcad::cpp2js_RObject_Id(handler, RView::INVALID_ID);
  }

  // auto generated read function for public static property INVALID_HANDLE:
  Q_INVOKABLE QJSValue getINVALID_HANDLE() {
    return RJSHelper_qcad::cpp2js_RObject_Handle(handler, RView::INVALID_HANDLE);
  }

  // auto generated read function for public static property PropertyCustom:
  Q_INVOKABLE QJSValue getPropertyCustom() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RView::PropertyCustom);
  }

  // auto generated read function for public static property PropertyType:
  Q_INVOKABLE QJSValue getPropertyType() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RView::PropertyType);
  }

  // auto generated read function for public static property PropertyHandle:
  Q_INVOKABLE QJSValue getPropertyHandle() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RView::PropertyHandle);
  }

  // auto generated read function for public static property PropertyProtected:
  Q_INVOKABLE QJSValue getPropertyProtected() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RView::PropertyProtected);
  }

  // auto generated read function for public static property PropertyWorkingSet:
  Q_INVOKABLE QJSValue getPropertyWorkingSet() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RView::PropertyWorkingSet);
  }

  // auto generated read function for public static property PropertySelected:
  Q_INVOKABLE QJSValue getPropertySelected() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RView::PropertySelected);
  }

  // auto generated read function for public static property PropertyInvisible:
  Q_INVOKABLE QJSValue getPropertyInvisible() {
    return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, RView::PropertyInvisible);
  }


      // static functions:
      
    // Class: RView
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
            
    // Class: RView
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
            
    // Class: RView
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
            
    // Class: RView
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
            

      private:
          RJSApi& handler;
          //static RView_WrapperSingleton* _singleInstance;

          // constants:
          
      };
    
    // static functions implementation in singleton wrapper:
    
    // wrapper class for RView
    class RView_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      RView_Wrapper(const RView_Wrapper&);

    public:
      // initialization of RView:
      static void init(RJSApi& handler);

      
        static RView* castToBase(void* vp, /*RJSType ID*/ int t) {
          

          // hook for modules to cast to other base types:
          for (int i=0; i<basecasters_RView.length(); i++) {
            RJSBasecaster_RView* basecaster = basecasters_RView[i];
            RView* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // pointer to desired type:
          if (t==RJSType_RView::getIdStatic()) {
            return (RView*)vp;
          }

          qWarning() << "RView_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static RView* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_RView*: wrapper wraps NULL";
          }

          RView* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "RView*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          RView_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            RView_Wrapper(RJSApi& h, RView* o, bool wrappedCreated);
          
        // special constructor to wrap existing object from shared pointer:
        
            //Q_INVOKABLE 
            RView_Wrapper(RJSApi& h, QSharedPointer<RView> o);
          

      // destructor:
      
          virtual ~RView_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: RView
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 5
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              RView_Wrapper
                
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
            

    // non-static functions:
    
    // Class: RView
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
            
    // Class: RView
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
            
    // Class: RView
    // Function: setDocument
    // Source: RObject
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
            
    // Class: RView
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
            
    // Class: RView
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
            
    // Class: RView
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
            
    // Class: RView
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
            
    // Class: RView
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
            
    // Class: RView
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
            
    // Class: RView
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
            
    // Class: RView
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
            
    // Class: RView
    // Function: isSelected
    // Source: RObject
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
            
    // Class: RView
    // Function: setSelected
    // Source: RObject
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
            
    // Class: RView
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
            
    // Class: RView
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
            
    // Class: RView
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
            
    // Class: RView
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
            
    // Class: RView
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
            
    // Class: RView
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
            
    // Class: RView
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
            
    // Class: RView
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
            
    // Class: RView
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
            
    // Class: RView
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
            
    // Class: RView
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
            
    // Class: RView
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
            
    // Class: RView
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
            
    // Class: RView
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
            
    // Class: RView
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
            
    // Class: RView
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
            
    // Class: RView
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
            
    // Class: RView
    // Function: getComplexity
    // Source: RObject
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
            
    // Class: RView
    // Function: setAutoUpdatesBlocked
    // Source: RObject
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
            
    // Class: RView
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
            
    // Class: RView
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
            
    // Class: RView
    // Function: getType
    // Source: 
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
            
    // Class: RView
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
            
    // Class: RView
    // Function: getName
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getName
              (

                
              )
              
                const
              
              ;
            
    // Class: RView
    // Function: setName
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setName
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RView
    // Function: getCenterPoint
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getCenterPoint
              (

                
              )
              
                const
              
              ;
            
    // Class: RView
    // Function: setCenterPoint
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setCenterPoint
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RView
    // Function: getWidth
    // Source: 
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
            
    // Class: RView
    // Function: setWidth
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setWidth
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RView
    // Function: getHeight
    // Source: 
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
            
    // Class: RView
    // Function: setHeight
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setHeight
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RView
    // Function: getBox
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getBox
              (

                
              )
              
              ;
            
    // Class: RView
    // Function: scale
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  scale
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RView
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
            
    // Class: RView
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
          return RJSType_RView::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return true;
            
        }

        // get wrapped object:
        RView* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
            else if (!spWrapped.isNull()) {
              return spWrapped.data();
            }
          
          return nullptr;
        }

        // get wrapped object (const):
        RView* getWrapped() const {
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
        virtual QSharedPointer<RView> getWrappedSp() {
          if (!spWrapped.isNull()) {
            return spWrapped;
          }
          if (wrapped!=nullptr) {
            qWarning() << "wrapper does not wrap a QSharedPointer<RView> but a regular pointer";
            return QSharedPointer<RView>();
          }
          return QSharedPointer<RView>();
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
        RView* wrapped;

        
          // wrapped object as shared pointer:
          QSharedPointer<RView> spWrapped;
        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_RView*> basecasters_RView;

      public:
        static void registerBasecaster_RView(RJSBasecaster_RView* bc) {
          basecasters_RView.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(RView_Wrapper*)

    Q_DECLARE_INTERFACE(RView_Wrapper, "org.qcad.RView_Wrapper")

  
  #endif
  
