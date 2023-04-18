This PR introduces a new `meta:GeneralMetadata` class to the ontology (it was missing), which contains metadata related to fundamental properties of a `dataspace`, such as its `title`, `description`, `tags`, and `category`. Additionally, it declares the `core:hasRegistrar` property to specify the identity responsible for registering and managing the dataspace, similar to how we define it for `service` and `dataset`.

The implementation is quite straightforward. This is a first projection of the different information considered, and we can refine it according to the needs.

```text
Class: 'General Metadata'
  SubClassOf: 
        Metadata,
        hasImage only xsd:uri,
        hasTopic only topic,
        hasDescription only xsd:string,
        hasPublisher only xsd:string,
        hasTag only xsd:string,
        hasTitle only xsd:string
```

## Example

From Rhizome dataspace (as specified [here](https://github.com/okp4/portal-web/blob/v1.1.0/data/dataspaces/ef347285-e52a-430d-9679-dcb76b962ce7/dataspace.json)):

```turtle
@prefix core: <https://ontology.okp4.space/core/> .

<https://ontology.okp4.space/dataverse/metadata/dataspace/ef347285-e52a-430d-9679-dcb76b962ce7>
  a <https://ontology.okp4.space/metadata/dataspace/GeneralMetadata> ;
  core:hasPublisher "OKP4" ;
  core:hasDescription """
      Rhizome est un data space exploité par OKP4, actuellement en cours de développement sur la base de la technologie OKP4. 
      Rhizome démontre la puissance du traitement et du partage des données, et la valeur que nous pouvons obtenir en connectant efficacement 
      différentes sources de données agricoles en libre accès sous différents formats de données. Rhizome vise à connecter autant de données que 
      possible et à fournir des visuels et métriques de grande valeur dans différents domaines liés à l'agriculture, tels que l'utilisation des 
      terres et la gestion du territoire, la gestion des cultures et du bétail, ainsi que les ressources forestières et l'industrie du bois.
    """@fr ;
  core:hasTitle "Rhizome" ;
  core:hasTopic <https://ontology.okp4.space/thesaurus/topic/AgricultureEnvironmentAndForestry> ;
  core:hasImage <https://images.unsplash.com/photo-1537721664796-76f77222a5d0> ;
  core:hasTag "agriculture", "open data", "demonstrateur"@fr, "dataviz" .
```