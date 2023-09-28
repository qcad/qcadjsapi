
  // Auto generated
  
    #ifndef RMOVEREFERENCEPOINTOPERATION_H_WRAPPER
    #define RMOVEREFERENCEPOINTOPERATION_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "RJSHelper.h"
        #include "../RJSHelper_qcad.h"
      

    #include "RJSWrapperObj.h"
  
        #include "REntity.h"
      
    #include <QQmlEngine>
    
        #include "RJSType_qcad.h"
      
        #include "RMoveReferencePointOperation.h"
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for RMoveReferencePointOperation
    class RMoveReferencePointOperation_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      RMoveReferencePointOperation_Wrapper(const RMoveReferencePointOperation_Wrapper&);

    public:
      // initialization of RMoveReferencePointOperation:
      static void init(RJSApi& handler);

      
        static RMoveReferencePointOperation* castToBase(void* vp, /*RJSType ID*/ int t) {
          

          // hook for modules to cast from other types to base RMoveReferencePointOperation:
          for (int i=0; i<basecasters_RMoveReferencePointOperation.length(); i++) {
            RJSBasecaster_RMoveReferencePointOperation* basecaster = basecasters_RMoveReferencePointOperation[i];
            RMoveReferencePointOperation* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class RMoveReferencePointOperation:
          if (t==RJSType_RMoveReferencePointOperation::getIdStatic()) {
            return (RMoveReferencePointOperation*)vp;
          }

          qWarning() << "RMoveReferencePointOperation_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static RMoveReferencePointOperation* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_RMoveReferencePointOperation*: wrapper wraps NULL";
          }

          RMoveReferencePointOperation* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "RMoveReferencePointOperation*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          RMoveReferencePointOperation_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            RMoveReferencePointOperation_Wrapper(RJSApi& h, RMoveReferencePointOperation* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~RMoveReferencePointOperation_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: RMoveReferencePointOperation
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              RMoveReferencePointOperation_Wrapper
                
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
    
              )
              
              ;
            

    // non-static functions:
    
    // Class: RMoveReferencePointOperation
    // Function: getEntityTypeFilter
    // Source: ROperation
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getEntityTypeFilter
              (

                
              )
              
                const
              
              ;
            
    // Class: RMoveReferencePointOperation
    // Function: setRecordAffectedObjects
    // Source: ROperation
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setRecordAffectedObjects
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RMoveReferencePointOperation
    // Function: setSpatialIndexDisabled
    // Source: ROperation
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setSpatialIndexDisabled
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RMoveReferencePointOperation
    // Function: setAllowInvisible
    // Source: ROperation
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setAllowInvisible
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RMoveReferencePointOperation
    // Function: setAllowAll
    // Source: ROperation
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setAllowAll
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RMoveReferencePointOperation
    // Function: setKeepChildren
    // Source: ROperation
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setKeepChildren
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RMoveReferencePointOperation
    // Function: setTransactionGroup
    // Source: ROperation
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setTransactionGroup
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RMoveReferencePointOperation
    // Function: getTransactionGroup
    // Source: ROperation
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getTransactionGroup
              (

                
              )
              
                const
              
              ;
            
    // Class: RMoveReferencePointOperation
    // Function: setText
    // Source: ROperation
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
            
    // Class: RMoveReferencePointOperation
    // Function: getText
    // Source: ROperation
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
            
    // Class: RMoveReferencePointOperation
    // Function: getTransactionTypes
    // Source: ROperation
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getTransactionTypes
              (

                
              )
              
                const
              
              ;
            
    // Class: RMoveReferencePointOperation
    // Function: setTransactionType
    // Source: ROperation
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setTransactionType
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
            
    // Class: RMoveReferencePointOperation
    // Function: getTransactionType
    // Source: ROperation
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getTransactionType
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RMoveReferencePointOperation
    // Function: apply
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  apply
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
            
    // Class: RMoveReferencePointOperation
    // Function: setGraphicsScene
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setGraphicsScene
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
          return RJSType_RMoveReferencePointOperation::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return true;
            
        }

        // get wrapped object:
        RMoveReferencePointOperation* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        RMoveReferencePointOperation* getWrapped() const {
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
        RMoveReferencePointOperation* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_RMoveReferencePointOperation*> basecasters_RMoveReferencePointOperation;

      public:
        static void registerBasecaster_RMoveReferencePointOperation(RJSBasecaster_RMoveReferencePointOperation* bc) {
          basecasters_RMoveReferencePointOperation.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(RMoveReferencePointOperation_Wrapper*)

    Q_DECLARE_INTERFACE(RMoveReferencePointOperation_Wrapper, "org.qcad.RMoveReferencePointOperation_Wrapper")

  
  #endif
  
