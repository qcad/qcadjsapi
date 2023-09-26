
  // Auto generated
  
    #ifndef RTABLETEVENT_H_WRAPPER
    #define RTABLETEVENT_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "RJSHelper.h"
        #include "../RJSHelper_qcad.h"
      

    #include "RJSWrapperObj.h"
  
        #include "RGraphicsScene.h"
      
        #include "RGraphicsView.h"
      
    #include <QQmlEngine>
    
        #include "RJSType_qcad.h"
      
        #include "RTabletEvent.h"
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for RTabletEvent
    class RTabletEvent_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      RTabletEvent_Wrapper(const RTabletEvent_Wrapper&);

    public:
      // initialization of RTabletEvent:
      static void init(RJSApi& handler);

      
        static RTabletEvent* castToBase(void* vp, /*RJSType ID*/ int t) {
          

          // hook for modules to cast to other base types:
          for (int i=0; i<basecasters_RTabletEvent.length(); i++) {
            RJSBasecaster_RTabletEvent* basecaster = basecasters_RTabletEvent[i];
            RTabletEvent* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // pointer to desired type:
          if (t==RJSType_RTabletEvent::getIdStatic()) {
            return (RTabletEvent*)vp;
          }

          qWarning() << "RTabletEvent::castToBase: type not found: " << getTypeName(t);

          return nullptr;
          
        }

        static RTabletEvent* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_RTabletEvent*: wrapper wraps NULL";
          }

          RTabletEvent* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "RTabletEvent*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          RTabletEvent_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            RTabletEvent_Wrapper(RJSApi& h, RTabletEvent* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~RTabletEvent_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  

    // non-static functions:
    
    // Class: RTabletEvent
    // Function: getModelPosition
    // Source: 
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
            
    // Class: RTabletEvent
    // Function: getUcsPosition
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getUcsPosition
              (

                
              )
              
                const
              
              ;
            
    // Class: RTabletEvent
    // Function: getScreenPosition
    // Source: 
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
            
    // Class: RTabletEvent
    // Function: getGraphicsView
    // Source: 
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
            
    // Class: RTabletEvent
    // Function: getGraphicsScene
    // Source: 
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
          return RJSType_RTabletEvent::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return true;
            
        }

        // get wrapped object:
        RTabletEvent* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        RTabletEvent* getWrapped() const {
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
        RTabletEvent* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_RTabletEvent*> basecasters_RTabletEvent;

      public:
        static void registerBasecaster_RTabletEvent(RJSBasecaster_RTabletEvent* bc) {
          basecasters_RTabletEvent.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(RTabletEvent_Wrapper*)

    Q_DECLARE_INTERFACE(RTabletEvent_Wrapper, "org.qcad.RTabletEvent_Wrapper")

  
  #endif
  
