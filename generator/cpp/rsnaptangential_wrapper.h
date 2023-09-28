
  // Auto generated
  
    #ifndef RSNAPTANGENTIAL_H_WRAPPER
    #define RSNAPTANGENTIAL_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "RJSHelper.h"
        #include "../RJSHelper_qcad.h"
      

    #include "RJSWrapperObj.h"
  
        #include "RMouseEvent.h"
      
    #include <QQmlEngine>
    
        #include "RJSType_qcad.h"
      
        #include "RSnapTangential.h"
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for RSnapTangential
    class RSnapTangential_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      RSnapTangential_Wrapper(const RSnapTangential_Wrapper&);

    public:
      // initialization of RSnapTangential:
      static void init(RJSApi& handler);

      
        static RSnapTangential* castToBase(void* vp, /*RJSType ID*/ int t) {
          

          // hook for modules to cast from other types to base RSnapTangential:
          for (int i=0; i<basecasters_RSnapTangential.length(); i++) {
            RJSBasecaster_RSnapTangential* basecaster = basecasters_RSnapTangential[i];
            RSnapTangential* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class RSnapTangential:
          if (t==RJSType_RSnapTangential::getIdStatic()) {
            return (RSnapTangential*)vp;
          }

          qWarning() << "RSnapTangential_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static RSnapTangential* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_RSnapTangential*: wrapper wraps NULL";
          }

          RSnapTangential* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "RSnapTangential*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum Status {
    Unknown = RSnapTangential::Unknown,
Free = RSnapTangential::Free,
Grid = RSnapTangential::Grid,
Endpoint = RSnapTangential::Endpoint,
OnEntity = RSnapTangential::OnEntity,
Center = RSnapTangential::Center,
Middle = RSnapTangential::Middle,
Distance = RSnapTangential::Distance,
Intersection = RSnapTangential::Intersection,
IntersectionManual = RSnapTangential::IntersectionManual,
Reference = RSnapTangential::Reference,
Perpendicular = RSnapTangential::Perpendicular,
Tangential = RSnapTangential::Tangential,
Coordinate = RSnapTangential::Coordinate,
CoordinatePolar = RSnapTangential::CoordinatePolar,

  };
  Q_ENUM(Status)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          RSnapTangential_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            RSnapTangential_Wrapper(RJSApi& h, RSnapTangential* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~RSnapTangential_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: RSnapTangential
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              RSnapTangential_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
              )
              
              ;
            

    // non-static functions:
    
    // Class: RSnapTangential
    // Function: showUiOptions
    // Source: RSnap
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
            
    // Class: RSnapTangential
    // Function: hideUiOptions
    // Source: RSnap
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
            
    // Class: RSnapTangential
    // Function: suspendEvent
    // Source: RSnap
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
            
    // Class: RSnapTangential
    // Function: finishEvent
    // Source: RSnap
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
            
    // Class: RSnapTangential
    // Function: getEntityIds
    // Source: RSnap
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
            
    // Class: RSnapTangential
    // Function: getStatus
    // Source: RSnap
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
            
    // Class: RSnapTangential
    // Function: setStatus
    // Source: RSnap
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
            
    // Class: RSnapTangential
    // Function: getLastSnap
    // Source: RSnap
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
            
    // Class: RSnapTangential
    // Function: setLastSnap
    // Source: RSnap
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
            
    // Class: RSnapTangential
    // Function: reset
    // Source: RSnap
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
            
    // Class: RSnapTangential
    // Function: snap
    // Source: RSnapEntityBase
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  snap
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
          return RJSType_RSnapTangential::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return true;
            
        }

        // get wrapped object:
        RSnapTangential* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        RSnapTangential* getWrapped() const {
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
        RSnapTangential* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_RSnapTangential*> basecasters_RSnapTangential;

      public:
        static void registerBasecaster_RSnapTangential(RJSBasecaster_RSnapTangential* bc) {
          basecasters_RSnapTangential.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(RSnapTangential_Wrapper*)

    Q_DECLARE_INTERFACE(RSnapTangential_Wrapper, "org.qcad.RSnapTangential_Wrapper")

  
  #endif
  
