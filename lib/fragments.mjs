export const FRAGMENT_ORG_WITH_ORG_USER = `fragment orgWithOrgUser on Org {
  id
  slug
  orgUser {
    id
    userId
    orgId
    partners {
      nodes {
        name
        data
      }
    }
    roleIds
    roles {
      nodes {
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
