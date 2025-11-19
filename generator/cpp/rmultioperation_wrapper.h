
  // Auto generated
  
    #ifndef RMULTIOPERATION_H_WRAPPER
    #define RMULTIOPERATION_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "RJSHelper.h"
        #include "../RJSHelper_qcad.h"
      

    #include "RJSWrapperObj.h"
  
    #include <QQmlEngine>
    
        #include "RJSType_qcad.h"
      
        #include "RMultiOperation.h"
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for RMultiOperation
    class QCADJSAPI_EXPORT 
     RMultiOperation_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      RMultiOperation_Wrapper(const RMultiOperation_Wrapper&);

    public:
      // initialization of RMultiOperation:
      static void init(RJSApi& handler);

      
        static RMultiOperation* castToBase(void* vp, /*RJSType ID*/ int t) {
          

          // hook for modules to cast from other types to base RMultiOperation:
          for (int i=0; i<basecasters_RMultiOperation.length(); i++) {
            RJSBasecaster_RMultiOperation* basecaster = basecasters_RMultiOperation[i];
            RMultiOperation* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class RMultiOperation:
          if (t==RJSType_RMultiOperation::getIdStatic()) {
            return (RMultiOperation*)vp;
          }

          qWarning() << "RMultiOperation_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static RMultiOperation* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_RMultiOperation*: wrapper wraps NULL";
          }

          RMultiOperation* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "RMultiOperation*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          RMultiOperation_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            RMultiOperation_Wrapper(RJSApi& h, RMultiOperation* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~RMultiOperation_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: RMultiOperation
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              RMultiOperation_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
                  ,
                  
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            

    // non-static functions:
    
    // Class: RMultiOperation
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
            
    // Class: RMultiOperation
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
            
    // Class: RMultiOperation
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
            
    // Class: RMultiOperation
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
            
    // Class: RMultiOperation
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
            
    // Class: RMultiOperation
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
            
    // Class: RMultiOperation
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
            
    // Class: RMultiOperation
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
            
    // Class: RMultiOperation
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
            
    // Class: RMultiOperation
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
            
    // Class: RMultiOperation
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
            
    // Class: RMultiOperation
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
            
    // Class: RMultiOperation
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
            
    // Class: RMultiOperation
    // Function: addOperation
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  addOperation
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RMultiOperation
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
          return RJSType_RMultiOperation::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return true;
            
        }

        // get wrapped object:
        RMultiOperation* getWrapped() {
          
            if (wrapped!=nullptr) {
              return wrapped;
            }
          
          return nullptr;
        }

        // get wrapped object (const):
        RMultiOperation* getWrapped() const {
          
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
          RMultiOperation* wrapped;
        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_RMultiOperation*> basecasters_RMultiOperation;

      public:
        static void registerBasecaster_RMultiOperation(RJSBasecaster_RMultiOperation* bc) {
          basecasters_RMultiOperation.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(RMultiOperation_Wrapper*)

    Q_DECLARE_INTERFACE(RMultiOperation_Wrapper, "org.qcad.RMultiOperation_Wrapper")

  
  #endif
  
