
  // Auto generated
  
    #ifndef RENTITYPICKEVENT_H_WRAPPER
    #define RENTITYPICKEVENT_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "RJSHelper.h"
        #include "../RJSHelper_qcad.h"
      

    #include "RJSWrapperObj.h"
  
        #include "RGraphicsView.h"
      
        #include "RGraphicsScene.h"
      
    #include <QQmlEngine>
    
        #include "RJSType_qcad.h"
      
        #include "REntityPickEvent.h"
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for REntityPickEvent
    class QCADJSAPI_EXPORT 
     REntityPickEvent_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      REntityPickEvent_Wrapper(const REntityPickEvent_Wrapper&);

    public:
      // initialization of REntityPickEvent:
      static void init(RJSApi& handler);

      
        static REntityPickEvent* castToBase(void* vp, /*RJSType ID*/ int t) {
          

          // hook for modules to cast from other types to base REntityPickEvent:
          for (int i=0; i<basecasters_REntityPickEvent.length(); i++) {
            RJSBasecaster_REntityPickEvent* basecaster = basecasters_REntityPickEvent[i];
            REntityPickEvent* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class REntityPickEvent:
          if (t==RJSType_REntityPickEvent::getIdStatic()) {
            return (REntityPickEvent*)vp;
          }

          qWarning() << "REntityPickEvent_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static REntityPickEvent* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_REntityPickEvent*: wrapper wraps NULL";
          }

          REntityPickEvent* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "REntityPickEvent*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          REntityPickEvent_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            REntityPickEvent_Wrapper(RJSApi& h, REntityPickEvent* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~REntityPickEvent_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: REntityPickEvent
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              REntityPickEvent_Wrapper
                
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
    
              )
              
              ;
            

    // non-static functions:
    
    // Class: REntityPickEvent
    // Function: getModelPosition
    // Source: RInputEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getModelPosition
              (

                
              )
              
                const
              
              ;
            
    // Class: REntityPickEvent
    // Function: setModelPosition
    // Source: RInputEvent
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setModelPosition
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: REntityPickEvent
    // Function: getCursorPosition
    // Source: RInputEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getCursorPosition
              (

                
              )
              
                const
              
              ;
            
    // Class: REntityPickEvent
    // Function: setCursorPosition
    // Source: RInputEvent
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setCursorPosition
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: REntityPickEvent
    // Function: getScreenPosition
    // Source: RInputEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getScreenPosition
              (

                
              )
              
                const
              
              ;
            
    // Class: REntityPickEvent
    // Function: setScreenPosition
    // Source: RInputEvent
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setScreenPosition
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: REntityPickEvent
    // Function: getGraphicsView
    // Source: RInputEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getGraphicsView
              (

                
              )
              
                const
              
              ;
            
    // Class: REntityPickEvent
    // Function: getGraphicsScene
    // Source: RInputEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getGraphicsScene
              (

                
              )
              
                const
              
              ;
            
    // Class: REntityPickEvent
    // Function: getEntityId
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getEntityId
              (

                
              )
              
                const
              
              ;
            
    // Class: REntityPickEvent
    // Function: setModifiers
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setModifiers
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: REntityPickEvent
    // Function: getModifiers
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getModifiers
              (

                
              )
              
                const
              
              ;
            
    // Class: REntityPickEvent
    // Function: isValid
    // Source: 
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
            
          // destroy function for non-copyable objects:
          Q_INVOKABLE void destr() {
            if (wrapped!=nullptr) {
              
                  delete wrapped;
                
              wrapped = nullptr;
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
          return RJSType_REntityPickEvent::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return true;
            
        }

        // get wrapped object:
        REntityPickEvent* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        REntityPickEvent* getWrapped() const {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object as void*:
        virtual void* getWrappedVoid() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        

        bool hasWrapped() const {
          return wrapped!=nullptr 
          
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
          
          return (unsigned long long int)0;
        }

        

        //public slots:
          //void slotDestroyed(QObject* obj) {
          //  qDebug() << "destroying QObject:" << (long int)obj;
          //}

        

        private:
        // wrapped object:
        REntityPickEvent* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_REntityPickEvent*> basecasters_REntityPickEvent;

      public:
        static void registerBasecaster_REntityPickEvent(RJSBasecaster_REntityPickEvent* bc) {
          basecasters_REntityPickEvent.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(REntityPickEvent_Wrapper*)

    Q_DECLARE_INTERFACE(REntityPickEvent_Wrapper, "org.qcad.REntityPickEvent_Wrapper")

  
  #endif
  
