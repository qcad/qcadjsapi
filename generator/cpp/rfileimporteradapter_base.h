

  // Auto generated
  // Adds public versions for event handlers to be called from 
  // JS implementation of these event handlers.
  
  #ifndef RFILEIMPORTERADAPTER_H_BASE
  #define RFILEIMPORTERADAPTER_H_BASE

  // include header:
  //#include "header_h.h"
    
        #include "RJSHelper.h"
        #include "../RJSHelper_qcad.h"
      
    #include <QQmlEngine>

    
        #include "RFileImporterAdapter.h"
      
    // Base class for RFileImporterAdapter
      class RFileImporterAdapter_Base : public RFileImporterAdapter {

      
        //Q_OBJECT
      

      public:
    

    // constructors:
    
  // Class: RFileImporterAdapter
  // Function: 
  // Parameters: 3
  // preceding Parameters: -1
RFileImporterAdapter_Base
        
      (

        
          RJSApi& _h
          
            ,
          RDocument& document, RMessageHandler* messageHandler=NULL, RProgressHandler* progressHandler=NULL
      )
      
        : RFileImporterAdapter(
          document, messageHandler, progressHandler
        ) 
        
          , handler(_h) /*, recFlag(false)*/
        
        {}
      
  // Class: RFileImporterAdapter
  // Function: 
  // Parameters: 0
  // preceding Parameters: 3
RFileImporterAdapter_Base
        
      (

        
          RJSApi& _h
          
      )
      
        : RFileImporterAdapter(
          
        ) 
        
          , handler(_h) /*, recFlag(false)*/
        
        {}
      
    // destructor:
    virtual ~RFileImporterAdapter_Base() { }

    public:
      // set handler:
      //void setHandler(RJSApi* h) {
      //  handler = h;
      //}
    
      // protected overwritten functions / events and their public invokable counterparts:
      

      // public virtual overwritten functions / events:
      
    public:
    // implementation of virtual public function
    // calls JS implementation if available
    virtual bool importFile(
      const QString& fileName, const QString& nameFilter, const QVariantMap& params=RDEFAULT_QVARIANTMAP
    )
    
    ;

    
      // implementation of virtual public function
      // always calls super implementation
      virtual bool importFileSup(
        const QString& fileName, const QString& nameFilter, const QVariantMap& params=RDEFAULT_QVARIANTMAP
      )
      
      {
        
          return
        RFileImporterAdapter::importFile(
          fileName, nameFilter, params
        );
      }
    

      // public pure-virtual functions:
      

    public:
      //void setRecFlag(bool on) {
      //  recFlag = on;
      //}

    public:
      QJSValue self;

    private:
      
        RJSApi& handler;
      
      //bool recFlag;

    };
    
  #endif
  