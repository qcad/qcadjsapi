
  // Auto generated
  
    #ifndef RSNAPENTITYBASE_H_WRAPPER
    #define RSNAPENTITYBASE_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "RJSHelper.h"
        #include "../RJSHelper_qcad.h"
      

    #include "RJSWrapperObj.h"
  
        #include "RMouseEvent.h"
      
    #include <QQmlEngine>
    
        #include "RJSType_qcad.h"
      
        #include "RSnapEntityBase.h"
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for RSnapEntityBase
    class RSnapEntityBase_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      RSnapEntityBase_Wrapper(const RSnapEntityBase_Wrapper&);

    public:
      // initialization of RSnapEntityBase:
      static void init(RJSApi& handler);

      
        static RSnapEntityBase* castToBase(void* vp, /*RJSType ID*/ int t) {
          

          // hook for modules to cast from other types to base RSnapEntityBase:
          for (int i=0; i<basecasters_RSnapEntityBase.length(); i++) {
            RJSBasecaster_RSnapEntityBase* basecaster = basecasters_RSnapEntityBase[i];
            RSnapEntityBase* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class RSnapEntityBase:
          if (t==RJSType_RSnapEntityBase::getIdStatic()) {
            return (RSnapEntityBase*)vp;
          }

          qWarning() << "RSnapEntityBase_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static RSnapEntityBase* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_RSnapEntityBase*: wrapper wraps NULL";
          }

          RSnapEntityBase* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "RSnapEntityBase*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum Status {
    Unknown = RSnapEntityBase::Unknown,
Free = RSnapEntityBase::Free,
Grid = RSnapEntityBase::Grid,
Endpoint = RSnapEntityBase::Endpoint,
OnEntity = RSnapEntityBase::OnEntity,
Center = RSnapEntityBase::Center,
Middle = RSnapEntityBase::Middle,
Distance = RSnapEntityBase::Distance,
Intersection = RSnapEntityBase::Intersection,
IntersectionManual = RSnapEntityBase::IntersectionManual,
Reference = RSnapEntityBase::Reference,
Perpendicular = RSnapEntityBase::Perpendicular,
Tangential = RSnapEntityBase::Tangential,
Coordinate = RSnapEntityBase::Coordinate,
CoordinatePolar = RSnapEntityBase::CoordinatePolar,

  };
  Q_ENUM(Status)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          RSnapEntityBase_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            RSnapEntityBase_Wrapper(RJSApi& h, RSnapEntityBase* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~RSnapEntityBase_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  

    // non-static functions:
    
    // Class: RSnapEntityBase
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
            
    // Class: RSnapEntityBase
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
            
    // Class: RSnapEntityBase
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
            
    // Class: RSnapEntityBase
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
            
    // Class: RSnapEntityBase
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
            
    // Class: RSnapEntityBase
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
            
    // Class: RSnapEntityBase
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
            
    // Class: RSnapEntityBase
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
            
    // Class: RSnapEntityBase
    // Function: snap
    // Source: 
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
          return RJSType_RSnapEntityBase::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return true;
            
        }

        // get wrapped object:
        RSnapEntityBase* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        RSnapEntityBase* getWrapped() const {
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
        RSnapEntityBase* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_RSnapEntityBase*> basecasters_RSnapEntityBase;

      public:
        static void registerBasecaster_RSnapEntityBase(RJSBasecaster_RSnapEntityBase* bc) {
          basecasters_RSnapEntityBase.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(RSnapEntityBase_Wrapper*)

    Q_DECLARE_INTERFACE(RSnapEntityBase_Wrapper, "org.qcad.RSnapEntityBase_Wrapper")

  
  #endif
  
