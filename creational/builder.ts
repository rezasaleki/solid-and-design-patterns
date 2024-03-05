
interface QueryBuilder {
    table(table: string): QueryBuilder;
    select(cols): QueryBuilder;
    limit(): QueryBuilder;
    where(condition): QueryBuilder;
}

class MySqlQueryBuilder implements QueryBuilder {
    table(table: string): QueryBuilder {
        // ...
        return this;
    }
    limit(): QueryBuilder {
        // ...
        return this;
    }

    select(cols): QueryBuilder {
        // ...
        return this;
    }

    where(condition): QueryBuilder {
        // ...
        return this;
    }
}

