export const FRAGMENT_ORG_WITH_ORG_USER = `fragment orgWithOrgUser on Org {
  id # req for cache categoryFn
  slug
  orgUser {
    id # req for cache categoryFn
    userId
    orgId
    partners {
      nodes {
        id # req for cache categoryFn
        name
        data
      }
    }
    roleIds
    roles {
      nodes {
        id # req for cache categoryFn
        name
        priority
        permissions {
          nodes {
            sourceType
            sourceId
            permission
            value
          }
        }
      }
    }
  }
}
`
