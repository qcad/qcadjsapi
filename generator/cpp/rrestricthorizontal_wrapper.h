
  // Auto generated
  
    #ifndef RRESTRICTHORIZONTAL_H_WRAPPER
    #define RRESTRICTHORIZONTAL_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "RJSHelper.h"
        #include "../RJSHelper_qcad.h"
      

    #include "RJSWrapperObj.h"
  
        #include "RDocumentInterface.h"
      
    #include <QQmlEngine>
    
        #include "RJSType_qcad.h"
      
        #include "RRestrictHorizontal.h"
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for RRestrictHorizontal
    class QCADJSAPI_EXPORT 
     RRestrictHorizontal_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      RRestrictHorizontal_Wrapper(const RRestrictHorizontal_Wrapper&);

    public:
      // initialization of RRestrictHorizontal:
      static void init(RJSApi& handler);

      
        static RRestrictHorizontal* castToBase(void* vp, /*RJSType ID*/ int t) {
          

          // hook for modules to cast from other types to base RRestrictHorizontal:
          for (int i=0; i<basecasters_RRestrictHorizontal.length(); i++) {
            RJSBasecaster_RRestrictHorizontal* basecaster = basecasters_RRestrictHorizontal[i];
            RRestrictHorizontal* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class RRestrictHorizontal:
          if (t==RJSType_RRestrictHorizontal::getIdStatic()) {
            return (RRestrictHorizontal*)vp;
          }

          qWarning() << "RRestrictHorizontal_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static RRestrictHorizontal* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_RRestrictHorizontal*: wrapper wraps NULL";
          }

          RRestrictHorizontal* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "RRestrictHorizontal*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          RRestrictHorizontal_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            RRestrictHorizontal_Wrapper(RJSApi& h, RRestrictHorizontal* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~RRestrictHorizontal_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: RRestrictHorizontal
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              RRestrictHorizontal_Wrapper
                
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
    
    // Class: RRestrictHorizontal
    // Function: showUiOptions
    // Source: RSnapRestriction
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
            
    // Class: RRestrictHorizontal
    // Function: hideUiOptions
    // Source: RSnapRestriction
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
            
    // Class: RRestrictHorizontal
    // Function: getLastSnap
    // Source: RSnapRestriction
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
            
    // Class: RRestrictHorizontal
    // Function: reset
    // Source: RSnapRestriction
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
            
    // Class: RRestrictHorizontal
    // Function: restrictSnap
    // Source: RRestrictOrthogonal
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  restrictSnap
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
          return RJSType_RRestrictHorizontal::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return true;
            
        }

        // get wrapped object:
        RRestrictHorizontal* getWrapped() {
          
            if (wrapped!=nullptr) {
              return wrapped;
            }
          
          return nullptr;
        }

        // get wrapped object (const):
        RRestrictHorizontal* getWrapped() const {
          
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
          RRestrictHorizontal* wrapped;
        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_RRestrictHorizontal*> basecasters_RRestrictHorizontal;

      public:
        static void registerBasecaster_RRestrictHorizontal(RJSBasecaster_RRestrictHorizontal* bc) {
          basecasters_RRestrictHorizontal.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(RRestrictHorizontal_Wrapper*)

    Q_DECLARE_INTERFACE(RRestrictHorizontal_Wrapper, "org.qcad.RRestrictHorizontal_Wrapper")

  
  #endif
  
