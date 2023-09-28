
  // Auto generated
  
    #ifndef RSNAPONENTITY_H_WRAPPER
    #define RSNAPONENTITY_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "RJSHelper.h"
        #include "../RJSHelper_qcad.h"
      

    #include "RJSWrapperObj.h"
  
        #include "RMouseEvent.h"
      
    #include <QQmlEngine>
    
        #include "RJSType_qcad.h"
      
        #include "RSnapOnEntity.h"
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for RSnapOnEntity
    class RSnapOnEntity_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      RSnapOnEntity_Wrapper(const RSnapOnEntity_Wrapper&);

    public:
      // initialization of RSnapOnEntity:
      static void init(RJSApi& handler);

      
        static RSnapOnEntity* castToBase(void* vp, /*RJSType ID*/ int t) {
          

          // hook for modules to cast from other types to base RSnapOnEntity:
          for (int i=0; i<basecasters_RSnapOnEntity.length(); i++) {
            RJSBasecaster_RSnapOnEntity* basecaster = basecasters_RSnapOnEntity[i];
            RSnapOnEntity* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class RSnapOnEntity:
          if (t==RJSType_RSnapOnEntity::getIdStatic()) {
            return (RSnapOnEntity*)vp;
          }

          qWarning() << "RSnapOnEntity_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static RSnapOnEntity* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_RSnapOnEntity*: wrapper wraps NULL";
          }

          RSnapOnEntity* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "RSnapOnEntity*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum Status {
    Unknown = RSnapOnEntity::Unknown,
Free = RSnapOnEntity::Free,
Grid = RSnapOnEntity::Grid,
Endpoint = RSnapOnEntity::Endpoint,
OnEntity = RSnapOnEntity::OnEntity,
Center = RSnapOnEntity::Center,
Middle = RSnapOnEntity::Middle,
Distance = RSnapOnEntity::Distance,
Intersection = RSnapOnEntity::Intersection,
IntersectionManual = RSnapOnEntity::IntersectionManual,
Reference = RSnapOnEntity::Reference,
Perpendicular = RSnapOnEntity::Perpendicular,
Tangential = RSnapOnEntity::Tangential,
Coordinate = RSnapOnEntity::Coordinate,
CoordinatePolar = RSnapOnEntity::CoordinatePolar,

  };
  Q_ENUM(Status)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          RSnapOnEntity_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            RSnapOnEntity_Wrapper(RJSApi& h, RSnapOnEntity* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~RSnapOnEntity_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: RSnapOnEntity
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              RSnapOnEntity_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
              )
              
              ;
            

    // non-static functions:
    
    // Class: RSnapOnEntity
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
            
    // Class: RSnapOnEntity
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
            
    // Class: RSnapOnEntity
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
            
    // Class: RSnapOnEntity
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
            
    // Class: RSnapOnEntity
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
            
    // Class: RSnapOnEntity
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
            
    // Class: RSnapOnEntity
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
            
    // Class: RSnapOnEntity
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
            
    // Class: RSnapOnEntity
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
            
    // Class: RSnapOnEntity
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
            
    // Class: RSnapOnEntity
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
          return RJSType_RSnapOnEntity::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return true;
            
        }

        // get wrapped object:
        RSnapOnEntity* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        RSnapOnEntity* getWrapped() const {
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
        RSnapOnEntity* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_RSnapOnEntity*> basecasters_RSnapOnEntity;

      public:
        static void registerBasecaster_RSnapOnEntity(RJSBasecaster_RSnapOnEntity* bc) {
          basecasters_RSnapOnEntity.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(RSnapOnEntity_Wrapper*)

    Q_DECLARE_INTERFACE(RSnapOnEntity_Wrapper, "org.qcad.RSnapOnEntity_Wrapper")

  
  #endif
  
