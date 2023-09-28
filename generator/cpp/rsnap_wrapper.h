
  // Auto generated
  
    #ifndef RSNAP_H_WRAPPER
    #define RSNAP_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "RJSHelper.h"
        #include "../RJSHelper_qcad.h"
      

    #include "RJSWrapperObj.h"
  
        #include "RGraphicsView.h"
      
    #include <QQmlEngine>
    
        #include "RJSType_qcad.h"
      
        #include "RSnap.h"
      
      // wrapped object is RSnap_Base class if new object is created: 
      #include "rsnap_base.h"
    
    // static functions implementation in singleton wrapper:
    
    // wrapper class for RSnap
    class RSnap_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      RSnap_Wrapper(const RSnap_Wrapper&);

    public:
      // initialization of RSnap:
      static void init(RJSApi& handler);

      
        static RSnap* castToBase(void* vp, /*RJSType ID*/ int t) {
          

          // hook for modules to cast from other types to base RSnap:
          for (int i=0; i<basecasters_RSnap.length(); i++) {
            RJSBasecaster_RSnap* basecaster = basecasters_RSnap[i];
            RSnap* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class RSnap:
          if (t==RJSType_RSnap::getIdStatic()) {
            return (RSnap*)vp;
          }

          qWarning() << "RSnap_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static RSnap* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_RSnap*: wrapper wraps NULL";
          }

          RSnap* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "RSnap*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum Status {
    Unknown = RSnap::Unknown,
Free = RSnap::Free,
Grid = RSnap::Grid,
Endpoint = RSnap::Endpoint,
OnEntity = RSnap::OnEntity,
Center = RSnap::Center,
Middle = RSnap::Middle,
Distance = RSnap::Distance,
Intersection = RSnap::Intersection,
IntersectionManual = RSnap::IntersectionManual,
Reference = RSnap::Reference,
Perpendicular = RSnap::Perpendicular,
Tangential = RSnap::Tangential,
Coordinate = RSnap::Coordinate,
CoordinatePolar = RSnap::CoordinatePolar,

  };
  Q_ENUM(Status)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          RSnap_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            RSnap_Wrapper(RJSApi& h, RSnap* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~RSnap_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: RSnap
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              RSnap_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
              )
              
              ;
            

    // non-static functions:
    
    // Class: RSnap
    // Function: snap
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      snapSuper
                    
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
            
    // Class: RSnap
    // Function: showUiOptions
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      showUiOptionsSuper
                    
              (

                
              )
              
              ;
            
    // Class: RSnap
    // Function: hideUiOptions
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      hideUiOptionsSuper
                    
              (

                
              )
              
              ;
            
    // Class: RSnap
    // Function: suspendEvent
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  suspendEvent
              (

                
              )
              
              ;
            
    // Class: RSnap
    // Function: finishEvent
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  finishEvent
              (

                
              )
              
              ;
            
    // Class: RSnap
    // Function: getEntityIds
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getEntityIds
              (

                
              )
              
              ;
            
    // Class: RSnap
    // Function: getStatus
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getStatus
              (

                
              )
              
                const
              
              ;
            
    // Class: RSnap
    // Function: setStatus
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setStatus
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RSnap
    // Function: getLastSnap
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getLastSnap
              (

                
              )
              
                const
              
              ;
            
    // Class: RSnap
    // Function: setLastSnap
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setLastSnap
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RSnap
    // Function: reset
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  reset
              (

                
              )
              
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
          return RJSType_RSnap::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return true;
            
        }

        // get wrapped object:
        RSnap* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        RSnap* getWrapped() const {
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

        
          // get wrapped base object or nullptr:
          RSnap_Base* getWrappedBase() {
            RSnap* w = getWrapped();
            return dynamic_cast<RSnap_Base*>(w);
          }

          RSnap_Base* getWrappedBase() const {
            RSnap* w = getWrapped();
            return dynamic_cast<RSnap_Base*>(w);
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

        
          //void setRecFlag(bool on) const {
          //  RSnap_Base* wb = getWrappedBase();
          //  if (wb) {
          //    wb->setRecFlag(on);
          //  }
          //}
        

        private:
        // wrapped object:
        RSnap* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_RSnap*> basecasters_RSnap;

      public:
        static void registerBasecaster_RSnap(RJSBasecaster_RSnap* bc) {
          basecasters_RSnap.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(RSnap_Wrapper*)

    Q_DECLARE_INTERFACE(RSnap_Wrapper, "org.qcad.RSnap_Wrapper")

  
  #endif
  
